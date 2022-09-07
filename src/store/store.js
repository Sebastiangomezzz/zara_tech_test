import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './Slices/cartSlice';
import { productsApiSlice } from './api/productsApi';

const reducers = combineReducers({
  cart: cartReducer,
  [productsApiSlice.reducerPath]: productsApiSlice.reducer
});

export const store = configureStore({
  reducer: reducers
});
