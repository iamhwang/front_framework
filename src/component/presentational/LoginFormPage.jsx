/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
  Container,
  Wrapper,
  TopBox,
  Separator,
  Line,
  BlueBox,
} from '../../css/style';

export default function LoginFormPage({ onChange, onClick, onCreate }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Container>
      <BlueBox />
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
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <Line>
              <button
                type="button"
                onClick={onClick}
              >
                Login
              </button>
              <button
                type="button"
                onClick={onCreate}
              >
                Create
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
    </Container>
  );
}
