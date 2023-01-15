import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  header: string
}

const initialState: State = {
  header: '',
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateHeader(state, action: PayloadAction<string>) {
      state.header = action.payload
    },
  },
})

export const { updateHeader } = headerSlice.actions

export default headerSlice.reducer
