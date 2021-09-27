import { createSlice } from '@reduxjs/toolkit';

import {
  requestMariaDB,
  requestLoginAPI,
} from './services/api';

const initialState = {
  loginFields: {
    id: '',
    password: '',
  },
  accessToken: '',
  user: {
    no: '',
    id: '',
  },
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

export function fetchRequestMariaDB() {
  return async () => {
    await requestMariaDB();
  };
}

export function fetchRequestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { id, password } } = getState();
    const { accessToken } = await requestLoginAPI({ id, password });
    dispatch(setAccessToken({ accessToken }));
  };
}

export default reducer;
