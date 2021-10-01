import React from 'react';
import { useDispatch } from 'react-redux';

import { changeLoginFields, fetchRequestLogin } from '../../redux/slice';

import LoginFormPage from '../presentational/LoginFormPage';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  function handleChangeLoginFields({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleClickLoginButton() {
    dispatch(fetchRequestLogin());
  }

  return (
    <>
      <LoginFormPage
        onChange={handleChangeLoginFields}
        onClick={handleClickLoginButton}
      />
    </>
  );
}
