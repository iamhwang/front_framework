import React from 'react';

import {
  Container,
  Wrapper,
  Separator,
} from './style';

function NotFound() {
  return (
    <Container>
      <Wrapper>
        <Separator>
          <div>{' '}</div>
          <span>NOT FOUND</span>
          <div>{' '}</div>
        </Separator>
      </Wrapper>
    </Container>
  );
}

export default NotFound;
