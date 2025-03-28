import Mock from 'mockjs';
import loginApi from "./mock/login";
import {getUserInfoApi} from "./mock/user";

Mock.mock('/api/login','post', loginApi);
Mock.mock('/api/getUserInfo','post', getUserInfoApi);