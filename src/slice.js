import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { no: 2, id: 'iam2' },
    { no: 3, id: 'iam3' },
    { no: 4, id: 'iam4' },
  ],
  user: { no: 1, id: 'iamhwangggg' },
};

const reducers = {
  changeUserName(state, { payload: id }) {
    return {
      ...state,
      user: {
        ...state.user,
        id,
      },
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'k-concept',
  initialState,
  reducers,
});

export const {
  changeUserName,
} = actions;

export default reducer;
