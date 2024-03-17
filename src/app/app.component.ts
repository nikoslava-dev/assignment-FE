import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, filter, switchMap, tap, map, combineLatest, of, Subscribable, Subscription } from 'rxjs';
import {IFile, ITable } from "./contracts";
import {AppService} from "./app.service";
import {loadFiles, loadTables, setSelectedFile, setSelectedTable} from "./state/actions";
import { select, Store } from '@ngrx/store';
import { selectFilesList, selectFile, selectTable, selectTables } from "./state/selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';

  files$: Observable<Array<IFile>>;
  tables$: Observable<Array<ITable>>;
  selectedTable: ITable | null;
  selectedFile: string;
  sub: Subscription;

  constructor(private appService: AppService,
    private store: Store<{files: any}>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadFiles());

    this.files$ = this.store.pipe(select(selectFilesList)).pipe(filter((val) => val.length > 0));

    this.tables$ = this.store.pipe(select(selectFile)).pipe(
      filter((val) => val != ''),
      switchMap(val => this.appService.getTables(val))
    );

    this.sub = this.store.pipe(select(selectTable)).pipe(
      filter((val) => val != ''),
      switchMap((table) => this.appService.getTable(this.selectedFile, table))
    ).subscribe(val => this.selectedTable = val);
  }

  ngOnDestroy(): void {
    if (!this.sub) {
      return;
    }

    this.sub.unsubscribe();
  }

  onFileChanged(e: any) {
    this.selectedFile = e;
    this.store.dispatch(setSelectedFile({file: e}));
  }

  onTableChanged(e: any) {
    this.selectedTable = null;
    this.store.dispatch(setSelectedTable({table: e}));
  }
}
