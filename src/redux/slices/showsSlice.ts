import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { AxiosError } from 'axios'
import errorConstants from '../../constant/errorConstants'
import { showsService } from '../services/showsService'
import { RootState } from '../store'

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
          message: data.message || 'Request Error'
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

const initialState: SHOWS_SLICE_STATE_Interface = {
  shows: [],
  isLoading: {
    fetchAllShows: false
  },
  isError: {
    fetchAllShows: false
  },
  isSuccess: {
    fetchAllShows: false
  },
  error: null
}

const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllShows.pending, (state) => {
        state.isLoading.fetchAllShows = true
        state.isSuccess.fetchAllShows = false
        state.isError.fetchAllShows = false
      })
      .addCase(fetchAllShows.fulfilled, (state, action) => {
        state.shows.push(action.payload)
        state.isLoading.fetchAllShows = false
        state.isSuccess.fetchAllShows = true
        state.isError.fetchAllShows = false
      })
      .addCase(fetchAllShows.rejected, (state, action) => {
        state.isLoading.fetchAllShows = false
        state.isSuccess.fetchAllShows = false
        state.isError.fetchAllShows = true
        state.error = action.payload
      })
  }
})

export const selectShows = (state: RootState) => state.shows.shows
export default showSlice.reducer
