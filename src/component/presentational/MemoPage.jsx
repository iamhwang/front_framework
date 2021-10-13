import React from 'react';

import { Memo, MemoX } from '../../css/style';

export default function MemoPage({ no, memo, onDelete }) {
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
