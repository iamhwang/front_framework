/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
  Container,
  Wrapper,
  TopBox,
} from '../../style';

export default function LogoutFormPage({ id, accessToken, onClick }) {
  return (
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
              placeholder="iamhwang"
              disabled
            />
            <label htmlFor="id">
              TOKEN
            </label>
            <input
              type="Text"
              name="id"
              value={accessToken}
              placeholder="fjelsan129rnf3il1ndlf"
              disabled
            />
            <button
              id="logoutButton"
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
