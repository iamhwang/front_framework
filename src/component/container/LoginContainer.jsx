import React from 'react';

import { useSelector } from 'react-redux';

import HomePage from '../presentational/HomePage';
import LoginFormContainer from './LoginFormContainer';

export default function LoginContainer() {
  const { accessToken } = useSelector((state) => ({
    accessToken: state.loginUser.accessToken,
  }));

  return (
    <>
      { accessToken
        ? <HomePage />
        : <LoginFormContainer />}
    </>
  );
}
