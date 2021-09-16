import React from 'react';
import { fetchTest } from './services/api';

function Conn() {
  async function handleClick() {
    await fetchTest();
  }

  return (
    <div>
      <p>hello, world</p>
      <button
        type="button"
        // onClick={async () => await handleClick()}
      >
        click
      </button>
    </div>
  );
}

export default Conn;
