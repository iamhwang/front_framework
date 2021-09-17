export async function requestLoginAPI({ id, password }) {
  const url = 'http://localhost:3000/login';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
