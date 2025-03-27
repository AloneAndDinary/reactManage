import Mock from 'mockjs';
import homeApi from "./mock/home";
Mock.mock('/api/home/getData','get', homeApi);