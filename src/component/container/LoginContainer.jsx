import React from 'react';

import { useSelector } from 'react-redux';

import LogoutFormContainer from './LogoutFormContainer';
import LoginFormContainer from './LoginFormContainer';

export default function LoginContainer() {
  const { accessToken } = useSelector((state) => ({
    accessToken: state.loginUser.accessToken,
  }));

  return (
    <>
      { accessToken
        ? <LogoutFormContainer />
        : <LoginFormContainer />}
    </>
  );
}
