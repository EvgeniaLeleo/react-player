import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  access?: string
  refresh?: string
}

const initialState: State = {
  access: undefined,
  refresh: undefined,
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<State>) => {
      state.access = action.payload.access
      state.refresh = action.payload.refresh
    },
  },
})

export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer
