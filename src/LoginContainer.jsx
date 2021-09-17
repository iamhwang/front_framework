import React from 'react';
import {
  Container,
  Wrapper,
  TopBox,
  Separator,
} from './style';

function LoginContainer() {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <h1>K-concept</h1>
          <form>
            <input type="Text" placeholder="Username" />
            <input type="Text" placeholder="Password" />
            <button
              type="submit"
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

export default LoginContainer;
