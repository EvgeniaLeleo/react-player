import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  isVisible: boolean
}

const initialState: State = {
  isVisible: false,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setVisibility(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload
    },
  },
})

export const { setVisibility } = playerSlice.actions

export default playerSlice.reducer
