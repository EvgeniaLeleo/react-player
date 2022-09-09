import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { TData, Login, DataState } from './types';

export const fetchLogin = createAsyncThunk<TData, Login>(
  'auth/fetchLogin',
  async (params) => {
    const { data } = await axios.post<TData>('/login', params);
    return data;
  },
);

export const fetchRegister = createAsyncThunk<TData, Login>(
  'auth/fetchRegister',
  async (params) => {
    const { data } = await axios.post<TData>('/register', params);
    return data;
  },
);

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/user');
  return data;
});

const initialState = {
  data: JSON.parse(localStorage.getItem("dataUser")!) || null,
  status: 'loading',
} as DataState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        localStorage.setItem("dataUser", JSON.stringify(state.data));
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = 'failed';
        state.data = null;
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        localStorage.setItem("dataUser", JSON.stringify(state.data));
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = 'failed';
        state.data = null;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        localStorage.setItem("dataUser", JSON.stringify(state.data));
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = 'failed';
        state.data = null;
      });
  },
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
