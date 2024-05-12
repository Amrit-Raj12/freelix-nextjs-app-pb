import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface EmailState {
  email: string | null
  // Add other user-related fields if needed
}

const initialState: EmailState = {
  email: null,
  // Initialize other user-related fields if needed
}

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmailData: (state, action: PayloadAction<EmailState>) => {
      state.email = action.payload.email
    },
    clearEmail: (state) => {
      state.email = null
    },
  },
})

export const { setEmailData, clearEmail } = emailSlice.actions

export const selectEmail = (state: { mail: EmailState }) => state.mail

export default emailSlice.reducer
