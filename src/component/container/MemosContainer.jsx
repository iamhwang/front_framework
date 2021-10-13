import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MemosPage from '../presentational/MemosPage';
import { BlueBox } from '../../css/style';
import {
  requestMemosInit,
  requestMemoDelete,
} from '../../redux/slice';

export default function MemosContainer() {
  const { memos } = useSelector((state) => ({
    memos: state.memos,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestMemosInit());
  }, [dispatch]);

  function handleDelete({ no }) {
    dispatch(requestMemoDelete({ no }));
  }

  return (
    <BlueBox>
      <MemosPage memos={memos} onDelete={handleDelete} />
    </BlueBox>
  );
}
