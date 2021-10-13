/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import MemosContainer from '../container/MemosContainer';

import {
  Container,
  Wrapper,
  TopBox,
  Separator,
  Line,
} from '../../css/style';

export default function LogoutFormPage({
  id, memo, onChange, onMemo, onClick, onDelete,
}) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ value });
  }

  return (
    <>
      <Container>
        <Wrapper>
          <TopBox>
            <h1>PROFILE</h1>
            <form>
              <label htmlFor="id">
                ID
              </label>
              <input
                id="id"
                type="Text"
                name="id"
                value={id}
                placeholder=""
                disabled
              />
              <label htmlFor="id">
                TOKEN
              </label>
              <input
                id="memo"
                type="Text"
                name="memo"
                value={memo}
                onChange={handleChange}
                placeholder="메모를 입력하세요."
              />
              <Line>
                <button
                  id="memoButton"
                  type="button"
                  onClick={onMemo}
                >
                  memo
                </button>
                <button
                  id="logoutButton"
                  type="button"
                  onClick={onClick}
                >
                  Logout
                </button>
                <button
                  type="button"
                  onClick={onDelete}
                >
                  Delete
                </button>
              </Line>
            </form>
            <Separator>
              <div>{' '}</div>
              <span>GROUPWARE</span>
              <div>{' '}</div>
            </Separator>
          </TopBox>
        </Wrapper>
        <MemosContainer />
      </Container>
    </>
  );
}
