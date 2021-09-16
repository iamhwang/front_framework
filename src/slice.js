import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const reducers = {

};

const { actions, reducer } = createSlice({
  name: 'k-concept',
  initialState,
  reducers,
});

export const {
  setTest,
} = actions;

export default reducer;
