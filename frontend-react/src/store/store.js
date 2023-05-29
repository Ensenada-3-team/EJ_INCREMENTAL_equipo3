import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice.js';
import userRoleReducer from './reducers/userRoleSlice.js';
import currentUserReducer from './reducers/currentUserSlice.js';

const store = configureStore({
  reducer: {
    search: searchReducer,
    userRole: userRoleReducer,
    currentUser: currentUserReducer,
  },
});

export default store;