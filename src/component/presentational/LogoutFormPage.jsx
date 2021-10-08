/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
  Container,
  KConcept,
  Wrapper,
  TopBox,
  Separator,
  Line,
} from '../../css/style';

export default function LogoutFormPage({
  id, onChange, onMemo, onClick, onDelete,
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
                type="Text"
                name="memo"
                onChange={handleChange}
                placeholder="메모를 입력하세요."
              />
              <Line>
                <button
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
        <KConcept />
      </Container>
    </>
  );
}
