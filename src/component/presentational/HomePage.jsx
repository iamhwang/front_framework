/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Container } from '../../css/style';
import LogoutFormContainer from '../container/LogoutFormContainer';
import MemosContainer from '../container/MemosContainer';

export default function HomePage() {
  return (
    <Container>
      <LogoutFormContainer />
      <MemosContainer />
    </Container>
  );
}
