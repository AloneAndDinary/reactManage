import http from "./request";

export const getUser = (params) => {
  return http.request({
    method: 'get', url: '/home/getData', params
  });
};