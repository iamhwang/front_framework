import React from 'react';
import MemoPage from './MemoPage';

export default function MemosPage({ memos, onDelete }) {
  return (
    <>
      {memos && memos.map((memo) => (
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
