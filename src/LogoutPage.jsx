import React from 'react';

export default function LogoutPage({ id = 'hi', onClick }) {
  return (
    <>
      <p>
        Hello,
        {id}
      </p>
      <button
        type="button"
        onClick={onClick}
      >
        Logout
      </button>
    </>
  );
}
