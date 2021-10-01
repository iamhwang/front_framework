import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setAccessToken } from '../../redux/slice';

import LogoutFormPage from '../presentational/LogoutFormPage';

export default function LogoutFormContainer() {
  const { accessToken, id } = useSelector((state) => ({
    accessToken: state.accessToken,
    id: state.loginUser.id,
  }));

  const dispatch = useDispatch();
  function handleClickLogoutButton() {
    dispatch(setAccessToken(''));
  }

  return (
    <>
      <LogoutFormPage
        id={id}
        accessToken={accessToken}
        onClick={handleClickLogoutButton}
      />
    </>
  );
}
