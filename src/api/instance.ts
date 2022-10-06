import axios from 'axios';

export const instance = axios.create({
  // baseURL: `${process.env.REACT_APP_BASE_URL}`,
  baseURL: 'http://localhost:8001',
});
