import checkAPIResponse from '../util/checkAPIResponse';

export async function requestMemoCreateAPI({ no, memo }) {
  const url = 'http://localhost:3000/api/memo/memoCreate';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      no,
      memo,
    }),
  });

  const data = await response.json();
  return checkAPIResponse(data);
}

export async function requestMemoDeleteAPI({ no }) {
  const url = 'http://localhost:3000/api/memo/memoDelete';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      no,
    }),
  });

  const data = await response.json();
  return checkAPIResponse(data);
}

export async function requestMemosGetAPI({ no }) {
  const url = 'http://localhost:3000/api/memo/memosGet';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      no,
    }),
  });

  const data = await response.json();
  return checkAPIResponse(data);
}
