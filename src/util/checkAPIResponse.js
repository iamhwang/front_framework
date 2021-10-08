/* eslint-disable no-alert */
export default function checkAPIResponse(data) {
  if (!data.status) {
    alert(data.msg);
  }

  if (data.status && data.statusCode === 201) {
    alert(data.msg);
  }

  return data;
}
