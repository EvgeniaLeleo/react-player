import { createSlice } from '@reduxjs/toolkit'

type State = {
  isOpen: boolean
}

const initialState: State = {
  isOpen: false,
}

const navMenuSlice = createSlice({
  name: 'navMenu',
  initialState,
  reducers: {
    setIsNavMenuOpened: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const { setIsNavMenuOpened } = navMenuSlice.actions
export default navMenuSlice.reducer
