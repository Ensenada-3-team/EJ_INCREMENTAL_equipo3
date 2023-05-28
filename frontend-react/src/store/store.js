import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice.js';
import userRoleReducer from './reducers/userRoleSlice.js';

const store = configureStore({
  reducer: {
    search: searchReducer,
    userRole: userRoleReducer,
  },
});

export default store;