import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAppState } from './state';

export const selectAppState = createFeatureSelector<IAppState>('app-state');
export const selectFilesList = createSelector(selectAppState, (state) => state.files);
export const selectFile = createSelector(selectAppState, (state) => state.file);
export const selectTables = createSelector(selectAppState, (state) => state.tables);
export const selectTable = createSelector(selectAppState, (state) => state.table);