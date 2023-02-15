import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../feature/auth/auth.slice'
import loanReducer from '../feature/loan/loan.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loan: loanReducer,
  },
});
