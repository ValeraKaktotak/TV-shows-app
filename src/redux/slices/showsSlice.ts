import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { AxiosError } from 'axios'
import { ERROR_TYPES } from '../../constant/errorConstants'
import { showsService } from '../services/showsService'

export const fetchAllShows = createAsyncThunk(
  'shows/fetch/all',
  async (_, thunkAPI) => {
    try {
      return await showsService.fetchAllShows()
    } catch (err) {
      const error = err as AxiosError

      if (error.response) {
        const { status } = error.response
        let code = null
        if (status === 404) {
          code = ERROR_TYPES.ERR_404
        } else if (status === 429) {
          code = ERROR_TYPES.ERR_429
        }

        return thunkAPI.rejectWithValue({
          code,
          message: 'Request Error'
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

// export const fetchSearchResult = createAsyncThunk(
//   'shows/fetch/search', async(query, thunkAPI) =>{
//     try {
//       return await showsService.fetch()
//     } catch (err) {
//       console.log(err)
//     }
//   }
// )

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
        state.shows = [...action.payload]
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

export default showSlice.reducer
