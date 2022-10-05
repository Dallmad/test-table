import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

const initialState: InitialStateType = {
  sort: '0name',
  table: [],
};

const slice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    createRow(state, action: PayloadAction<TableRowType>) {
      state.table.unshift(action.payload);
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const tableReducer = slice.reducer;
export const { createRow, setSort } = slice.actions;

// thunks
export const fetchRecipes =
  (from: string, size: string) => async (dispatch: Dispatch) => {
    try {
      /* const res = await requestAPI.getRecipes(from, size);

      console.log(res.data);
      dispatch(setRecipes(res.data));
      dispatch(setNumberItems(size));
      dispatch(setPage(from)); */
    } catch (error) {
      /*      if (error instanceof Error) {
        console.log(`error${error}`);
      } */
    }
  };

// types
export type InitialStateType = {
  sort: string;
  table: TableType;
};
export type TableType = TableRowType[];
export type TableRowType = {
  id: string;
  date: string;
  name: string;
  number: number;
  distance: number;
};
