import { request2 } from "./request";

export function loginAxios(formData) {
  return request2({
    url: '/login.php',
    method: 'post',
    params: formData
  })
}