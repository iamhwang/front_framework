/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
  Container,
  Wrapper,
  TopBox,
  Separator,
} from './style';

export default function LoginFormPage({ onChange, onClick }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Container>
      <Wrapper>
        <TopBox>
          <h1>K-concept</h1>
          <form>
            <label htmlFor="username">
              ID
            </label>
            <input
              type="Text"
              name="id"
              id="username"
              placeholder="username"
              onChange={handleChange}
            />
            <label htmlFor="Password">
              Password
            </label>
            <input
              type="Text"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={onClick}
            >
              Login
            </button>
          </form>
          <Separator>
            <div>{' '}</div>
            <span>GROUPWARE</span>
            <div>{' '}</div>
          </Separator>
        </TopBox>
      </Wrapper>
    </Container>
  );
}
