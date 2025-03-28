import http from "./request";

export const login = (data) => {
  return http.request({
    method: 'post', url: '/login', data
  })
}

export const getUser = (data) => {
  return http.request({
    method: 'post', url: '/getUserInfo', data
  });
};