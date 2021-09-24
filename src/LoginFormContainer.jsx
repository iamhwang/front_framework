import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HomeContainer from './HomeContainer';
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
        ? <HomeContainer onClick={handleClickLogoutButton} />
        : <LoginPage onChange={handleChangeLoginFields} onClick={handleClickLoginButton} />}
    </>
  );
}
