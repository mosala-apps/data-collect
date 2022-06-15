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
