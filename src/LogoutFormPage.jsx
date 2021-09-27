import React from 'react';

import {
  Container,
  Wrapper,
  TopBox,
} from './style';

export default function LogoutFormPage({ onClick }) {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <h1>PROFILE</h1>
          <form>
            <input
              type="Text"
              name="id"
              placeholder="iamhwang"
              disabled
            />
            <input
              type="Text"
              name="id"
              placeholder="fjelsan129rnf3il1ndlf"
              disabled
            />
            <button
              type="button"
              onClick={onClick}
            >
              Logout
            </button>
          </form>

        </TopBox>
      </Wrapper>
    </Container>
  );
}
