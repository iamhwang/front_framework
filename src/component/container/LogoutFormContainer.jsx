import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  setUserLogout,
  setMemo,
  requestUserDelete,
  requestMemoCreate,
} from '../../redux/slice';

import MemosContainer from './MemosContainer';
import LogoutFormPage from '../presentational/LogoutFormPage';
import { Container } from '../../css/style';

export default function LogoutFormContainer() {
  const { id, memo } = useSelector((state) => ({
    memo: state.memo,
    id: state.loginUser.id,
  }));

  const dispatch = useDispatch();
  function handleClickMemoButton() {
    dispatch(requestMemoCreate());
  }

  function handleClickLogoutButton() {
    dispatch(setUserLogout());
  }

  function handleClickDeleteButton() {
    dispatch(requestUserDelete());
  }

  function handleChangeMemo({ value }) {
    dispatch(setMemo({ memo: value }));
  }

  return (
    <Container>
      <LogoutFormPage
        id={id}
        memo={memo}
        onChange={handleChangeMemo}
        onMemo={handleClickMemoButton}
        onClick={handleClickLogoutButton}
        onDelete={handleClickDeleteButton}
      />
      <MemosContainer />
    </Container>
  );
}
