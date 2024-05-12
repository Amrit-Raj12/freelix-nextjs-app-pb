import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  token: string | null
  user: {
    userName: string | null
    email: string | null
    mood: string | null
    contentType: string | null
    watchLimit: number | null
  }
  // Add other user-related fields if needed
}

const initialState: UserState = {
  token: null,
  user: {
    userName: null,
    email: null,
    mood: null,
    contentType: null,
    watchLimit: null,
  },
  // Initialize other user-related fields if needed
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.token = action.payload.token
      state.user = action.payload.user
      // Update other user-related fields if needed
    },
    clearUser: (state) => {
      state.token = null
      state.user.email = null
      state.user.userName = null

      // Clear other user-related fields if needed
    },
  },
})

export const { setUserData, clearUser } = userSlice.actions

export const selectUser = (state: { user: UserState }) => state.user

export default userSlice.reducer
