import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MariaPage from './MariaDBPage';
import { fetchRequestMariaDB } from './slice';

function MariaContainer() {
  const { user: { no, id } } = useSelector((state) => ({
    user: state.user,
  }));

  const dispatch = useDispatch();
  function handleClickMariaDB({ name, value }) {
    dispatch(fetchRequestMariaDB({ name, value }));
  }

  return (
    <>
      <MariaPage no={no} id={id} onClick={handleClickMariaDB} />
    </>
  );
}

export default MariaContainer;
