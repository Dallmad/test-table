import { AxiosResponse } from 'axios';

import { instance } from 'api';
import { TableRowType } from 'common';

export const requestAPI = {
  getItems() {
    return instance.get<AxiosResponse>(`/items`);
  },
  addItem(item: TableRowType) {
    return instance.post<TableRowType, AxiosResponse>(`/items`, item);
  },
};
