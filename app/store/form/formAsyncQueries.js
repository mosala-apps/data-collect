import apiURL from "../../config/apiURL"

export const syncForm = (payload) => {
  return new Promise((resolve, reject) => {
    apiURL.post('completed_forms/store-for-offline', payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data);
        reject(error);
      })
  })
}
