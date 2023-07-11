import apiURL from "../../config/apiURL"

export const fetchCompletedForm = (id) => {
  return new Promise((resolve, reject) => {
    apiURL.get(`completed_forms/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        reject(error);
      })
  })
}
export const getCompletedFormByHospital = (payload) => {
  return new Promise((resolve, reject) => {
    apiURL.get('completed-forms/completed-form-hospital',{
      params:payload
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        reject(error);
      })
  })
}
export const completedFormHistoryStore = (payload) => {
  return new Promise((resolve, reject) => {
    apiURL.post('completed-form-histories/store-completed-form-history', payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data);
        reject(error);
      })
  })
}


