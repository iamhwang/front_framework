import React from 'react';
import LogoutPage from './LogoutPage';

function Home({ onClick }) {
  return (
    <>
      <LogoutPage onClick={onClick} />
    </>
  );
}

export default Home;
