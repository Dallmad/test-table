import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://server-table.herokuapp.com/`,
  // baseURL: 'http://localhost:8001',
});
