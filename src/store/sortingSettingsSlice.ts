import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ORDER } from '../constants'
import { Order } from '../types'

type State = {
  order: string
}

const initialState: State = {
  order: ORDER.notSelected as Order,
}

const sortingSettingsSlice = createSlice({
  name: 'sortingSettings',
  initialState,
  reducers: {
    updateOrder(state, action: PayloadAction<string>) {
      state.order = action.payload
    },
  },
})

export const { updateOrder } = sortingSettingsSlice.actions

export default sortingSettingsSlice.reducer
