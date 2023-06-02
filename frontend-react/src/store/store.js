import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice.js';
import userRoleReducer from './reducers/userRoleSlice.js';
import currentUserReducer from './reducers/currentUserSlice.js';
import feedbackReducer from './reducers/feedbackSlice.js';

const store = configureStore({
  reducer: {
    search: searchReducer,
    userRole: userRoleReducer,
    currentUser: currentUserReducer,
    feedback: feedbackReducer,
  },
});

export default store;