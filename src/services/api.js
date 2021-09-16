export async function fetchTest() {
  const url = 'http://localhost:3000/test';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
