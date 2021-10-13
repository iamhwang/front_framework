import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { KConcept, Memo, MemoX } from '../../css/style';
import {
  requestMemosInit,
  requestMemoDelete,
} from '../../redux/slice';

function MemosPage({ memos, onDelete }) {
  return (
    <>
      {memos.map((memo) => (
        <MemoPage
          key={memo.NO}
          no={memo.NO}
          memo={memo.MEMO}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

function MemoPage({ no, memo, onDelete }) {
  function handleClick(event) {
    const { target } = event;
    onDelete({ no: target.id });
  }

  return (
    <Memo>
      <p>
        {memo}
        <MemoX
          id={no}
          type="button"
          onClick={handleClick}
        >
          X
        </MemoX>
      </p>
    </Memo>
  );
}

export default function LogoutFormContainer() {
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
    <KConcept>
      <MemosPage memos={memos} onDelete={handleDelete} />
    </KConcept>
  );
}
