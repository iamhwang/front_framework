import React from 'react';

function MariaPage({ no, id, onClick }) {
  return (
    <>
      <p>hello, MariaDB</p>
      <button
        type="button"
        onClick={onClick}
      >
        MariaBD
      </button>
      <p>{no}</p>
      <p>{id}</p>
    </>
  );
}

export default MariaPage;
