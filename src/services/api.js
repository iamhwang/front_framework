export async function fetchTest() {
  const url = 'http://localhost:3000/test';
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}
