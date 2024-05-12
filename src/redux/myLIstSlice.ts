import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Movie {
  name: string
  rating: string
  length: number
  language: string[]
  id: string
  // Add any other properties of Movie here
}

interface MyListState {
  movies: Movie[]
}

const initialState: MyListState = {
  movies: [],
}

const myListSlice = createSlice({
  name: "myList",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload)
    },
    removeMovie: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      )
      if (index !== -1) {
        state.movies.splice(index, 1)
      }
    },
    removeAllMovies: (state) => {
      state.movies = []
    },
  },
})

export const { addMovie, removeMovie, removeAllMovies } = myListSlice.actions

export const selectMovies = (state: { myList: MyListState }) =>
  state.myList.movies

export default myListSlice.reducer
