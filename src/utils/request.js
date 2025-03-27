import axios from "axios";

const http = axios.create({
  baseURL: '/api',
  timeout: 1000
});

http.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    console.log('token no found');
  }
  return config;
}, error => {
  return Promise.reject(error);
});


http.interceptors.response.use(response => {
  if(response.status === 200) {
    return response.data;
  } else {
    console.log(response)
    return response;
  }
}, error => {
  return Promise.reject(error);
});

export default http;
