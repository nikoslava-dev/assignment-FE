import { createAction, props } from "@ngrx/store";
import {IFile, ITable} from "../contracts";

export const loadFiles = createAction("load_files");
export const loadFilesSuccess = createAction(
    "load_files_success",
    props<{
        files: IFile[];
    }>()
);

export const loadTables = createAction("load_tables");
export const loadTablesSuccess = createAction(
    "load_tables_success",
    props<{
        tables: ITable[];
    }>()
);

export const setSelectedFile = createAction(
    "set_selected_file",
    props<{
        file: string;
    }>()
);

export const setSelectedTable = createAction(
    "set_selected_table",
    props<{
        table: string;
    }>()
);