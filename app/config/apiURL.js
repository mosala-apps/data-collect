import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.API_URL}/api/dashboard/`,
  // timeout: 1000,
});
