import React from 'react';

import {
  Container,
  Wrapper,
  TopBox,
  Separator,
} from './style';

export default function LoginPage({ onChange, onClick }) {
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
            <input
              type="Text"
              name="id"
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="Text"
              name="password"
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