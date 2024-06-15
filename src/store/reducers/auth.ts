import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface Auth {
  isLoggedIn: boolean;
  username: string | null;
}

const initialState: Auth = {
  isLoggedIn: false,
  username: null,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{username: string; password: string}>,
    ) => {
      state.username = action.payload.username;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

// Action creators are generated for each case reducer function

export const authActions = counterSlice.actions;

export default counterSlice.reducer;
