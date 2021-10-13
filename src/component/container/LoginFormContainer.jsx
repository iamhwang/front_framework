import React from 'react';
import { useDispatch } from 'react-redux';

import {
  changeLoginFields,
  requestUserLogin,
  requestUserCreate,
} from '../../redux/slice';

import LoginFormPage from '../presentational/LoginFormPage';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  function handleChangeLoginFields({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleClickLoginButton() {
    dispatch(requestUserLogin());
  }

  function handleClickCreateButton() {
    dispatch(requestUserCreate());
  }

  return (
    <>
      <LoginFormPage
        onChange={handleChangeLoginFields}
        onClick={handleClickLoginButton}
        onCreate={handleClickCreateButton}
      />
    </>
  );
}
