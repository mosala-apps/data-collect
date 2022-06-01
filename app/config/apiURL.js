import axios from 'axios'

export default axios.create({
  baseURL: 'https://dev-dashboard.stopcoronavirusrdc.info/api/dashboard',
  // timeout: 1000,
})
