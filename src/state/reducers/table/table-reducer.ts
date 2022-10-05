import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { requestAPI } from 'api';

const initialState: InitialStateType = {
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
    createRow(state, action: PayloadAction<TableRowType>) {
      state.table.unshift(action.payload);
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
export const { getItems, createRow, setSort, setFiltration } = slice.actions;

// thunks
export const fetchItems = () => async (dispatch: Dispatch) => {
  try {
    const res = await requestAPI.getItems();

    dispatch(getItems(res.data as any));
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error${error}`);
    }
  }
};

// types
export type InitialStateType = {
  sort: string;
  filtration: FiltrationType;
  table: TableType;
};
export type FiltrationType = {
  field: string;
  term: string;
  filter: string;
};
export type TableType = TableRowType[];
export type TableRowType = {
  id: string;
  date: string;
  name: string;
  number: number;
  distance: number;
};
