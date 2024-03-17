import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ITable } from '../contracts';

@Component({
  selector: 'my-tables',
  templateUrl: './my-tables.component.html',
  styleUrl: './my-tables.component.scss'
})
export class MyTablesComponent {
  @Input() tables: Array<ITable>;
  @Output() public tableChanged = new EventEmitter();

  selectedTable?: string;

  selectedTableChanged(tableTitle: string): void {
    this.selectedTable = tableTitle;
    this.tableChanged.emit(tableTitle);
  }
}
