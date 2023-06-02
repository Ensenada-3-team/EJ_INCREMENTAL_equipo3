import { createSlice } from '@reduxjs/toolkit';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: false,
  reducers: {
    setNewFeedback: (state) => {
      return true;
    },
  },
});

export const { setNewFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;