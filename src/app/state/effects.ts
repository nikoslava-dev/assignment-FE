import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { IFile } from '../contracts';
import * as actions from "./actions";

@Injectable()
export class FilesEffects {
    constructor(private readonly actions$: Actions,
        private readonly appService: AppService) {
    }

    getFiles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.loadFiles.type),
            switchMap(() => this.appService.getFiles()),
            map((files: IFile[]) => actions.loadFilesSuccess({files}))
        )
    );
}