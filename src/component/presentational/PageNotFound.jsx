import React from 'react';

import {
  Container,
  Wrapper,
  Separator,
} from '../../css/style';

function PageNotFound() {
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

export default PageNotFound;
