import { AxiosResponse } from 'axios';

import { instance } from 'api';

export const requestAPI = {
  getItems() {
    return instance.get<AxiosResponse>(`/items`);
  },
  addItem(id: number) {
    return instance.get<number, AxiosResponse>(`recipes/get-more-info?id=${id}`);
  },
};
