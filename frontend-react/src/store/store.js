import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice.js';
import feedbackReducer from './reducers/feedbackSlice.js';

const store = configureStore({
  reducer: {
    search: searchReducer,
    feedback: feedbackReducer,
  },
});

export default store;