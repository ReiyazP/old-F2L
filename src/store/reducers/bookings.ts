import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type SingleBooking = {
  id: string;
  time: string;
};

export interface Bookings {
  current: Array<SingleBooking>;
}

const initialState: Bookings = {
  current: [],
};

export const counterSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<SingleBooking>) => {
      state.current = [...state.current, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      state.current = state.current.filter(
        booking => booking.id !== action.payload,
      );
    },
  },
});

// Action creators are generated for each case reducer function

export const bookingActions = counterSlice.actions;

export default counterSlice.reducer;
