import { IFile, ITable } from "../contracts";

export interface IAppState {
    files: Array<IFile>;
    tables: Array<ITable>;
    file: string;
    table: string;
}

export const initialState: IAppState = {
    files: [],
    tables: [],
    file: '',
    table: ''
}
