import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LogoutPage from './LogoutPage';
import LoginPage from './LoginPage';

import { changeLoginFields, fetchRequestLogin, setAccessToken } from './slice';

export default function LoginFormContainer() {
  const { accessToken } = useSelector((state) => ({
    accessToken: state.accessToken,
  }));

  const dispatch = useDispatch();
  function handleChangeLoginFields({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleClickLoginButton() {
    dispatch(fetchRequestLogin());
  }

  function handleClickLogoutButton() {
    dispatch(setAccessToken(''));
  }

  return (
    <>
      { accessToken
        ? <LogoutPage onClick={handleClickLogoutButton} />
        : <LoginPage onChange={handleChangeLoginFields} onClick={handleClickLoginButton} />}
    </>
  );
}
