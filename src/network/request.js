import axios from "axios";

export function request() {

}
export function request2(config) {
  const instance = axios.create({
    baseURL: 'https://ku.qingnian8.com/dataApi/vueadmin',
    timeout: 5000,
  });
  return instance(config)
}