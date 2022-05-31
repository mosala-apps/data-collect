import axios from 'axios'

export default axios.create({
<<<<<<< HEAD
  baseURL: `${process.env.API_URL}`,
=======
  baseURL: 'http://192.168.43.93:8000/api/dashboard/',
>>>>>>> c31ea9aa6bad18f5fc0b2db58c3a5a0a19f72381
  // timeout: 1000,
})
