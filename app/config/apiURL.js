import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
// import { API_URL } from '@env';

export default axios.create({
  baseURL: 'https://dev-dashboard.stopcoronavirusrdc.info/api/dashboard',
  // baseURL: 'http://192.168.0.178:8000/api/dashboard',
  // timeout: 1000,
});
