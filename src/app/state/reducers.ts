import {createReducer, on} from "@ngrx/store";
import { loadFilesSuccess, loadTablesSuccess, setSelectedFile, setSelectedTable } from "./actions";
import { IAppState, initialState } from "./state";


const reducer = createReducer<IAppState>(initialState,
  on(loadFilesSuccess, (state, {files}) => {
    return {
      ...state,
      files
    }
  }),
  on(loadTablesSuccess, (state, {tables}) => {
    return {
      ...state,
      tables
    }
  }),
  on(setSelectedFile, (state, {file}) => {
    return {
      ...state,
      file
    }
  }),
  on(setSelectedTable, (state, {table}) => {
    return {
      ...state,
      table
    }
  })
)

export function appReducer(state = initialState, action: any): IAppState {
  return reducer(state, action);
}