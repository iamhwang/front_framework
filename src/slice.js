import { createSlice } from '@reduxjs/toolkit';

import {
  requestLoginAPI,
} from './services/api';

const initialState = {
  loginFields: {
    id: '',
    password: '',
  },
  loginUser: {
    id: '',
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
  setLoginUser(state, { payload: { id } }) {
    return {
      ...state,
      loginUser: {
        ...state.loginUser,
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
  changeLoginFields,
  setAccessToken,
  setLoginUser,
} = actions;

export function fetchRequestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { id, password } } = getState();
    const data = await requestLoginAPI({ id, password });
    dispatch(setLoginUser({ id: data.id }));
    dispatch(setAccessToken({ accessToken: data.accessToken }));
  };
}

export default reducer;
