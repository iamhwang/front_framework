/* eslint-disable no-alert */
export default function checkAPIResponse({ statusCode, message, data }) {
  if (statusCode === 400) {
    alert(message);
  }

  if (statusCode === 101) {
    alert(message);
  }

  if (statusCode === 110) {
    alert(message);
  }

  return data;
}
