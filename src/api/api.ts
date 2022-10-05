import { AxiosResponse } from 'axios';

import { instance } from 'api';
import { TableRowType } from 'state/reducers/table/table-reducer';

export const requestAPI = {
  getItems() {
    return instance.get<AxiosResponse>(`/items`);
  },
  addItem(item: TableRowType) {
    // @ts-ignore
    return instance.post<TableRowType, AxiosResponse>(`/items`, item);
  },
};
