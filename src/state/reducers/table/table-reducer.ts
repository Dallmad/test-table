import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType } from './types';

import { FiltrationType, TableType } from 'common';

export const initialState: InitialStateType = {
  sort: '0name',
  filtration: {
    field: '',
    term: '',
    filter: '',
  },
  table: [],
};

const slice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    getItems(state, action: PayloadAction<TableType>) {
      state.table = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setFiltration(state, action: PayloadAction<FiltrationType>) {
      state.filtration = action.payload;
    },
  },
});

export const tableReducer = slice.reducer;
export const { getItems, setSort, setFiltration } = slice.actions;
