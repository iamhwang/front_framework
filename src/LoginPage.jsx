import React from 'react';

import { useSelector } from 'react-redux';

import LogoutFormContainer from './LogoutFormContainer';
import LoginFormContainer from './LoginFormContainer';

export default function LoginPage() {
  const { accessToken } = useSelector((state) => ({
    accessToken: state.accessToken,
  }));

  return (
    <>
      { accessToken
        ? <LogoutFormContainer />
        : <LoginFormContainer />}
    </>
  );
}
