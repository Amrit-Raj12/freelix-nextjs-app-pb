import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Movie {
  _id: number
  name: string
  year: string
  length: number
  genre: string[]
  language: string[]
  rating: string
  imdb_rating: string
}

interface filterState {
  results: Movie[]
  loading: boolean
  error: string | null
}

const initialState: filterState = {
  results: [],
  loading: false,
  error: null,
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterStart(state) {
      state.loading = true
      state.error = null
    },
    filterSuccess(state, action: PayloadAction<Movie[]>) {
      state.loading = false
      state.results = action.payload
    },
    filterFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    clearFilter(state) {
      state.results = []
      state.loading = false
      state.error = null
    },
  },
})

export const { filterStart, filterSuccess, filterFailure, clearFilter } =
  filterSlice.actions

export default filterSlice.reducer
