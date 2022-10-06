import { Dispatch } from 'redux';

import { requestAPI } from 'api';
import { TableRowType } from 'common';
import { getItems } from 'state';

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
export const addItem = (item: TableRowType) => async (dispatch: Dispatch) => {
  try {
    await requestAPI.addItem(item);

    dispatch(fetchItems() as any);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error${error}`);
    }
  }
};
