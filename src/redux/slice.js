import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import {
  requestUserLoginAPI,
  requestUserCreateAPI,
  requestUserDeleteAPI,
  requestMemoCreateAPI,
  requestMemosGetAPI,
  requestMemoDeleteAPI,
} from '../services/api';

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
  setUserLogin(state, { payload: { id, no, accessToken } }) {
    return {
      ...state,
      loginUser: {
        ...state.loginUser,
        id,
        no,
        accessToken,
      },
      loginFields: '',
    };
  },
  setUserLogout(state) {
    return {
      ...state,
      loginUser: '',
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
  setUserLogin,
  setUserLogout,
  setMemo,
  setMemos,
} = actions;

export function requestUserLogin() {
  return async (dispatch, getState) => {
    const { loginFields } = getState();
    const { id, no, accessToken } = await requestUserLoginAPI(loginFields);
    dispatch(setUserLogin({ id, no, accessToken }));
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
    dispatch(setUserLogout());
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
