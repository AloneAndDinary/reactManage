import {createBrowserRouter, Navigate} from "react-router-dom";
import Layout from "../pages/layout";
import Home from "../pages/home";
import OrgUser from "../pages/user/orgUser";
import Login from "../pages/login";
const routes = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        element: <Navigate to='home' replace/>
      },
    ],
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/home',
    Component: Layout,
    children: [
      {
        path: '/home',
        Component: Home
      },
    ],
  },
  {
    path: '/user',
    Component: Layout,
    children: [
      {
        path: '/user/orgUser',
        Component: OrgUser
      }
    ]
  }
];


export default createBrowserRouter(routes);



