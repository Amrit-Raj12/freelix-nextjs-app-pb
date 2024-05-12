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

interface SearchState {
  results: Movie[]
  loading: boolean
  error: string | null
}

const initialState: SearchState = {
  results: [],
  loading: false,
  error: null,
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchStart(state) {
      state.loading = true
      state.error = null
    },
    searchSuccess(state, action: PayloadAction<Movie[]>) {
      state.loading = false
      state.results = action.payload
    },
    searchFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    clearSearch(state) {
      state.results = []
      state.loading = false
      state.error = null
    },
  },
})

export const { searchStart, searchSuccess, searchFailure, clearSearch } =
  searchSlice.actions

export default searchSlice.reducer
