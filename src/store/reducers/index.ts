import {combineReducers} from '@reduxjs/toolkit';
import bookings, {bookingActions} from './bookings';
import auth, {authActions} from './auth';

const rootReducer = combineReducers({
  auth: auth,
  bookings: bookings,
});

export type RootState = ReturnType<typeof rootReducer>;

export const actions = {
  auth: authActions,
  bookings: bookingActions,
};
export type ActionsT = typeof actions;
export default rootReducer;
