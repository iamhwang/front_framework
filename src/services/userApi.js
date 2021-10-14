import checkAPIResponse from '../util/checkAPIResponse';

export async function requestUserLoginAPI({ id, password }) {
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

export async function requestUserCreateAPI({ id, password }) {
  const url = 'http://localhost:3000/api/user/userCreate';
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

export async function requestUserDeleteAPI({ id }) {
  const url = 'http://localhost:3000/api/user/userDelete';
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
