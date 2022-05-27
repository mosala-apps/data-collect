import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.43.93:8000/api/dashboard/',
  // timeout: 1000,
});
