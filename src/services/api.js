import checkAPIResponse from '../util/checkAPIResponse';

export async function requestLoginAPI({ id, password }) {
  const url = 'http://localhost:3000/api/user/userLogin';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      password,
    }),
  });

  const data = await response.json();
  return checkAPIResponse(data);
}

export async function requestCreateAPI({ id, password }) {
  const url = 'http://localhost:3000/api/user/createUser';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      password,
    }),
  });

  const data = await response.json();
  return checkAPIResponse(data);
}

export async function requestDeleteAPI({ id }) {
  const url = 'http://localhost:3000/api/user/deleteUser';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  });

  const data = await response.json();
  return checkAPIResponse(data);
}

export async function requestMemoAPI({ id, memo }) {
  const url = 'http://localhost:3000/api/memo/createMemo';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      memo,
    }),
  });

  const data = await response.json();
  return checkAPIResponse(data);
}
