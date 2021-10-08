import { createSlice } from '@reduxjs/toolkit';

import {
  requestLoginAPI,
  requestCreateAPI,
  requestDeleteAPI,
  requestMemoAPI,
} from '../services/api';

const initialState = {
  loginFields: {
    id: '',
    password: '',
  },
  loginUser: {
    id: '',
  },
  accessToken: '',
  memo: 'memo',
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
      loginFields: '',
    };
  },
  deleteUser(state, { payload: { id } }) {
    return {
      ...state,
      loginUser: {
        ...state.loginUser,
        id,
      },
      loginFields: '',
    };
  },
  setMemo(state, { payload: { memo } }) {
    return {
      ...state,
      memo,
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
  deleteUser,
  setMemo,
} = actions;

export function fetchRequestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { id, password } } = getState();
    const data = await requestLoginAPI({ id, password });
    dispatch(setLoginUser({ id: data.id }));
    dispatch(setAccessToken({ accessToken: data.accessToken }));
  };
}

export function fetchRequestCreate() {
  return async (dispatch, getState) => {
    const { loginFields: { id, password } } = getState();
    const data = await requestCreateAPI({ id, password });
    return data;
  };
}

export function fetchRequestDelete() {
  return async (dispatch, getState) => {
    const { loginUser: { id } } = getState();
    const data = await requestDeleteAPI({ id });
    dispatch(setLoginUser({ id: '' }));
    dispatch(setAccessToken({ accessToken: '' }));
    return data;
  };
}

export function fetchRequestMemo() {
  return async (dispatch, getState) => {
    const { loginUser: { id }, memo } = getState();
    const data = await requestMemoAPI({ id, memo });
    return data;
  };
}

export default reducer;
