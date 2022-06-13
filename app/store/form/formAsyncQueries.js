import { createAsyncThunk } from '@reduxjs/toolkit'
import apiURL from '../../config/apiURL'

export const getAllFormFiltered = createAsyncThunk(
  'hospital/getAllFormFiltered',
  async (payload) => {
    console.log('payload ->', payload)

    try {
      const formFiltered = await apiURL.get(
        '/completed_forms/get-all-filtered',
        {
          params: payload,
        }
      )
      console.log('getAllFormFiltered ->', formFiltered)
      return formFiltered
    } catch (error) {}
  }
)

export default {}
