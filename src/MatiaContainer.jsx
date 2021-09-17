import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MariaPage from './MatiaPage';

import {
  changeUserName,
} from './slice';

function MariaContainer() {
  const dispatch = useDispatch();
  function handleClick() {

  }

  const { user: { no, id } } = useSelector((state) => ({
    user: state.user,
  }));

  return (
    <div>
      <p>This is Container</p>
      <button
        type="button"
        onClick={handleClick}
      >
        button
      </button>
      <MariaPage no={no} id={id} />
    </div>
  );
}

export default MariaContainer;
