import { createSlice } from '@reduxjs/toolkit'
// import { tracksDataApi } from '../services/tracksDataApi'
// import { RootState } from '../store'
// import { User } from '../types'

// const initialState: User = {
//   id: -1,
//   username: '',
//   email: '',
// }

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       tracksDataApi.endpoints.getCurrentUser.matchFulfilled,
//       (state, { payload }) => {
//         console.log(payload)
//         state.email = payload.email
//       }
//     )
//     builder.addMatcher(
//       tracksDataApi.endpoints.getCurrentUser.matchRejected,
//       (state, { payload }) => {
//         console.log(payload)
//         console.log('!!!rejected!!!')
//       }
//     )
//   },
// })

// export const selectUser = (state: RootState) => state.user

// export default userSlice.reducer
