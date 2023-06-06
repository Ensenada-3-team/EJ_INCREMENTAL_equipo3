import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice.js';
import feedbackReducer from './reducers/feedbackSlice.js';
import authReducer from './reducers/authSlice.js';

const store = configureStore({
  reducer: {
    search: searchReducer,
    feedback: feedbackReducer,
    auth: authReducer,
  },
});

export default store;