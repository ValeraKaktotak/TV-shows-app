import { createAsyncThunk } from '@reduxjs/toolkit'

import type { AxiosError } from 'axios'
import errorConstants from '../../constant/errorConstants'
import { showsService } from '../services/showsService'

type KnownError = {
  message: string
}

export const fetchAllShows = createAsyncThunk(
  'shows/fetch/all',
  async (_, thunkAPI) => {
    try {
      return await showsService.fetchAllShows()
    } catch (err) {
      const error = err as AxiosError<KnownError>
      if (error.response) {
        const { status, data } = error.response
        let code = null
        if (status === 404) {
          code = errorConstants.ERR_404
        } else if (status === 429) {
          code = errorConstants.ERR_429
        }

        return thunkAPI.rejectWithValue({
          code,
          message: data.message || 'Server Error'
        })
      } else if (error.request) {
        return thunkAPI.rejectWithValue({
          code: error.code,
          message: 'Network Error'
        })
      }

      return thunkAPI.rejectWithValue({
        code: 'ERR_GENERIC',
        message: 'Error'
      })
    }
  }
)
