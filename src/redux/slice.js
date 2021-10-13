import { createSlice } from '@reduxjs/toolkit';

import {
  requestUserLoginAPI,
  requestUserCreateAPI,
  requestUserDeleteAPI,
  requestMemoCreateAPI,
  requestMemosGetAPI,
  requestMemoDeleteAPI,
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
  memo: '',
  memos: [],
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
  setMemo(state, { payload: { memo } }) {
    return {
      ...state,
      memo,
    };
  },
  setMemos(state, { payload: { memos } }) {
    return {
      ...state,
      memos,
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
  deleteUser,
  setAccessToken,
  setLoginUser,
  setMemo,
  setMemos,
} = actions;

export function requestUserLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { id, password } } = getState();
    const data = await requestUserLoginAPI({ id, password });
    dispatch(setLoginUser({ id: data.id }));
    dispatch(setAccessToken({ accessToken: data.accessToken }));
  };
}

export function requestUserCreate() {
  return async (dispatch, getState) => {
    const { loginFields: { id, password } } = getState();
    const data = await requestUserCreateAPI({ id, password });
    return data;
  };
}

export function requestUserDelete() {
  return async (dispatch, getState) => {
    const { loginUser: { id } } = getState();
    const data = await requestUserDeleteAPI({ id });
    dispatch(setLoginUser({ id: '' }));
    dispatch(setAccessToken({ accessToken: '' }));
    return data;
  };
}

export function requestMemoCreate() {
  return async (dispatch, getState) => {
    const { loginUser: { id }, memo } = getState();
    const data = await requestMemoCreateAPI({ id, memo });
    dispatch(setMemo({ memo: '' }));

    const memos = await requestMemosGetAPI({ id });
    dispatch(setMemos({ memos }));

    return data;
  };
}

export function requestMemoDelete({ no }) {
  return async (dispatch) => {
    const data = await requestMemoDeleteAPI({ no });

    const memos = await requestMemosGetAPI({ id: 35 });
    dispatch(setMemos({ memos }));
    return data;
  };
}

export function requestMemosInit() {
  return async (dispatch, getState) => {
    const { loginUser: { id } } = getState();
    const data = await requestMemosGetAPI({ id });
    dispatch(setMemos({ memos: data }));
    return data;
  };
}

export default reducer;
