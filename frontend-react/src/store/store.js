import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice.js';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;