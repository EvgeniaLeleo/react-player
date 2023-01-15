import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ORDER } from '../constants'
import { Order } from '../types'

type TrackState = {
  order: string
}

const initialState: TrackState = {
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
