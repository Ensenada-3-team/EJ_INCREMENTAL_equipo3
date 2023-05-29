import { createSlice } from '@reduxjs/toolkit';

const currentUserSlice = createSlice({
  name: 'userId',
  initialState: {
    userId: '',
    token: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUserId, setToken } = currentUserSlice.actions;

export default currentUserSlice.reducer;