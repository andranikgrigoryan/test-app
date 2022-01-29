import { configureStore } from '@reduxjs/toolkit';
import exhibitionReducer from 'reduxWrapper/slices/exhibitionSlice';

export const store = configureStore({
   reducer: {
      exhibition: exhibitionReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }),
});
