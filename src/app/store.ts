import { configureStore } from '@reduxjs/toolkit'
import summariesReducer from '../routes/scrape/summariesSlice';

export const store = configureStore({
  reducer: {
    summaries: summariesReducer
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;