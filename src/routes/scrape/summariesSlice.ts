import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Summary {
  summary: string,
  url: string
}

let summaries: Array<Summary> = []; 

const initialState = summaries;

export const summariesSlice = createSlice({
  name: 'summaries',
  initialState,
  reducers: {
    addSummary: (state, action: PayloadAction<Summary>) => {
      state.push(action.payload);
    }
  }
});

export const { addSummary } = summariesSlice.actions;
export const selectSummaries = (state: RootState) => state.summaries;
export default summariesSlice.reducer;