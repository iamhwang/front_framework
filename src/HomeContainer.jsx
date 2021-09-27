import React from 'react';
import LogoutPage from './LogoutPage';
import MariaDBContainer from './MariaDBContainer';

function Home({ onClick }) {
  return (
    <>
      <LogoutPage onClick={onClick} />
      <MariaDBContainer />
    </>
  );
}

export default Home;
