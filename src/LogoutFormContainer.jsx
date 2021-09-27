import React from 'react';

import { useDispatch } from 'react-redux';
import { setAccessToken } from './slice';

import LogoutFormPage from './LogoutFormPage';

export default function LogoutFormContainer() {
  const dispatch = useDispatch();

  function handleClickLogoutButton() {
    dispatch(setAccessToken(''));
  }

  return (
    <>
      <LogoutFormPage
        onClick={handleClickLogoutButton}
      />
    </>
  );
}
