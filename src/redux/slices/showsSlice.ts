import type { AxiosError } from 'axios'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GENRES_TYPES } from '../../constant/commonConstans'
import { ERROR_TYPES } from '../../constant/errorConstants'
import { showsService } from '../services/showsService'

export const fetchAllShows = createAsyncThunk(
  'shows/fetch/all',
  async (_, thunkAPI) => {
    try {
      return await showsService.fetchAllShows()
    } catch (err) {
      const error = err as AxiosError<SHOWS_SLICE_ERROR_Interface>

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
          message: 'Response Error'
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

export const fetchAllShowsByGenre = createAsyncThunk(
  'shows/fetch/sortByGenre',
  async (genre: GENRES_TYPES, thunkAPI) => {
    try {
      const res = await showsService.fetchAllShows()
      thunkAPI.dispatch(showSlice.actions.setData(res))
      thunkAPI.dispatch(sortedByGenre(genre))
      return res
    } catch (err) {
      const error = err as AxiosError<SHOWS_SLICE_ERROR_Interface>

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
          message: 'Response Error'
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

export const fetchSearchResult = createAsyncThunk(
  'shows/fetch/search',
  async (query: string, thunkAPI) => {
    try {
      return await showsService.fetchSearchResult(query)
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
          message: 'Response Error'
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

export const fetchSingleShow = createAsyncThunk(
  'shows/fetch/single',
  async (showId: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(showSlice.actions.resetSingleShow())
      return await showsService.fetchSingleShow(showId)
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
          message: 'Response Error'
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
  searchResults: [],
  singleShow: null,
  isLoading: {
    fetchAllShows: false,
    fetchSearchResult: false,
    fetchSingleShow: false
  },
  isError: {
    fetchAllShows: false,
    fetchSearchResult: false,
    fetchSingleShow: false
  },
  isSuccess: {
    fetchAllShows: false,
    fetchSearchResult: false,
    fetchSingleShow: false
  },
  error: null
}

const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    resetSearchResult: (state) => {
      state.searchResults = []
    },
    resetSingleShow: (state) => {
      state.singleShow = null
    },
    setData: (state, action: PayloadAction<ShowsData_Interface[]>) => {
      state.shows = action.payload
    },
    sortedByGenre: (state, action: PayloadAction<GENRES_TYPES>) => {
      const result = state.shows.filter((show) =>
        show.genres.some((item) => item === action.payload)
      )
      state.shows = result
    }
  },
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
        //state.error = action.payload
        if (
          typeof action.payload === 'object' &&
          action.payload !== null &&
          'code' in action.payload &&
          'message' in action.payload
        ) {
          state.error = action.payload as SHOWS_SLICE_ERROR_Interface
        } else {
          state.error = {
            code: 'ERR_UNKNOWN',
            message: 'Unknown error occurred'
          }
        }
      })
      .addCase(fetchAllShowsByGenre.pending, (state) => {
        state.isLoading.fetchAllShows = true
        state.isSuccess.fetchAllShows = false
        state.isError.fetchAllShows = false
      })
      .addCase(fetchAllShowsByGenre.fulfilled, (state) => {
        state.isLoading.fetchAllShows = false
        state.isSuccess.fetchAllShows = true
        state.isError.fetchAllShows = false
      })
      .addCase(fetchAllShowsByGenre.rejected, (state, action) => {
        state.isLoading.fetchAllShows = false
        state.isSuccess.fetchAllShows = false
        state.isError.fetchAllShows = true
        //state.error = action.payload
        if (
          typeof action.payload === 'object' &&
          action.payload !== null &&
          'code' in action.payload &&
          'message' in action.payload
        ) {
          state.error = action.payload as SHOWS_SLICE_ERROR_Interface
        } else {
          state.error = {
            code: 'ERR_UNKNOWN',
            message: 'Unknown error occurred'
          }
        }
      })
      .addCase(fetchSearchResult.pending, (state) => {
        state.isLoading.fetchSearchResult = true
        state.isSuccess.fetchSearchResult = false
        state.isError.fetchSearchResult = false
      })
      .addCase(fetchSearchResult.fulfilled, (state, action) => {
        state.searchResults = [...action.payload]
        state.isLoading.fetchSearchResult = false
        state.isSuccess.fetchSearchResult = true
        state.isError.fetchSearchResult = false
      })
      .addCase(fetchSearchResult.rejected, (state, action) => {
        state.isLoading.fetchSearchResult = false
        state.isSuccess.fetchSearchResult = false
        state.isError.fetchSearchResult = true
        //state.error = action.payload
        if (
          typeof action.payload === 'object' &&
          action.payload !== null &&
          'code' in action.payload &&
          'message' in action.payload
        ) {
          state.error = action.payload as SHOWS_SLICE_ERROR_Interface
        } else {
          state.error = {
            code: 'ERR_UNKNOWN',
            message: 'Unknown error occurred'
          }
        }
      })
      .addCase(fetchSingleShow.pending, (state) => {
        state.isLoading.fetchSingleShow = true
        state.isSuccess.fetchSingleShow = false
        state.isError.fetchSingleShow = false
      })
      .addCase(fetchSingleShow.fulfilled, (state, action) => {
        state.singleShow = action.payload
        state.isLoading.fetchSingleShow = false
        state.isSuccess.fetchSingleShow = true
        state.isError.fetchSingleShow = false
      })
      .addCase(fetchSingleShow.rejected, (state, action) => {
        state.isLoading.fetchSingleShow = false
        state.isSuccess.fetchSingleShow = false
        state.isError.fetchSingleShow = true
        //state.error = action.payload
        if (
          typeof action.payload === 'object' &&
          action.payload !== null &&
          'code' in action.payload &&
          'message' in action.payload
        ) {
          state.error = action.payload as SHOWS_SLICE_ERROR_Interface
        } else {
          state.error = {
            code: 'ERR_UNKNOWN',
            message: 'Unknown error occurred'
          }
        }
      })
  }
})

export const { resetSearchResult, resetSingleShow, sortedByGenre } =
  showSlice.actions
export default showSlice.reducer
