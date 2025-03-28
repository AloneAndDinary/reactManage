import React from "react";
import {Outlet} from "react-router-dom";
import {Layout,Breadcrumb} from "antd";
import Aside from "./components/Aside";
import {useSelector} from "react-redux";
import HeaderComponent from "./components/HeaderComponent";

const {Content,Footer} = Layout;

const MyLayout = () => {
  const collapsed = useSelector(state => {
    return state.collection.isCollapse
  });
  const userInfo = useSelector(state => {
    return state.user.userInfo;
  })
  return (
    <Layout style={{height: '100vh'}}>
      <HeaderComponent sysName={'React后台管理系统'} userInfo={userInfo}></HeaderComponent>
      <Layout>
        <Aside collapsed={collapsed}></Aside>
        <Layout>
          <Breadcrumb items={[{title: 'Home'},{title: 'List'},{title: 'App'}]} style={{margin: '16px 0'}}/>
          <Content style={{padding: 24, margin: 0, minHeight: 280, background: '#fff', borderRadius: 2}}>
            <Outlet/>
          </Content>
          <Footer style={{height: 30,lineHeight:'0px', textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default MyLayout;

