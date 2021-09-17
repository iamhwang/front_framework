import { createSlice } from '@reduxjs/toolkit';

import {
  requestLoginAPI,
} from './services/api';

const initialState = {
  loginFields: {
    id: '',
    password: 'sadf',
  },
  accessToken: '',
};

const reducers = {
  changeLoginFields(state, { payload: { name, value } }) {
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        [name]: value,
      },
    };
  },
  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      accessToken,
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'k-concept',
  initialState,
  reducers,
});

export const {
  changeLoginFields,
  setAccessToken,
} = actions;

export function fetchRequestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { id, password } } = getState();
    const accessToken = await requestLoginAPI({ id, password });
    dispatch(setAccessToken({ accessToken }));
  };
}

export default reducer;
