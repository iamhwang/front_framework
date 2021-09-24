export async function requestMariaDB() {
  const url = 'http://localhost:3000/MariaDB';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function requestLoginAPI({ id, password }) {
  const url = 'http://localhost:3000/login';
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
  return data;
}
