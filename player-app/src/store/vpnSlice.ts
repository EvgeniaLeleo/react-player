import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TVpnState = {
  isEnabled: boolean;
};

const initialState: TVpnState = {
  isEnabled: true,
};

const vpnSlice = createSlice({
  name: 'vpn',
  initialState,
  reducers: {
    setVpnState(state, action: PayloadAction<boolean>) {
      state.isEnabled = action.payload;
    },
  },
});

export const { setVpnState } = vpnSlice.actions;

export default vpnSlice.reducer;
