import React from "react";
import {Outlet} from "react-router-dom";
import {Layout,Breadcrumb} from "antd";
import Aside from "./components/Aside";
import {useSelector} from "react-redux";


const {Header, Content,Footer} = Layout;

const MyLayout = () => {
  const collapsed = useSelector(state => {
    return state.collection.isCollapse
  });
  const userInfo = useSelector(state => {
    console.log(1,state.user)
    return state.user.userInfo;
  })
  return (
    <Layout style={{height: '100vh'}}>
      <Header style={{display: 'flex', alignItems: 'center'}}>
        <div style={{color: '#fff'}}>React后台管理系统</div>
      </Header>
      <Layout>
        <Aside collapsed={collapsed}></Aside>
        <Layout>
          <Breadcrumb items={[{title: 'Home'},{title: 'List'},{title: 'App'}]} style={{margin: '16px 0'}}/>
          <Content style={{padding: 24, margin: 0, minHeight: 280, background: '#fff', borderRadius: 2}}>
            <Outlet/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default MyLayout;

