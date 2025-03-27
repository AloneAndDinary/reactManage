import React from "react";
import { Layout, Menu} from "antd";
import * as Icon from '@ant-design/icons'
import {useDispatch} from "react-redux";
import {changeCollapse} from "../../store/reducers/collectionReducer";
import menuList from "../config";
import {useNavigate} from "react-router-dom";
const {Sider} = Layout;

const iconToElement = name => React.createElement(Icon[name]);

const getItems = (items,list =[]) => {
  items.map(item => {
    list.push({
      key: item.path,
      ...(item.icon? {icon: iconToElement(item?.icon)} : []),
      label: item.label,
      ...(item.children?{children: getItems(item.children)} : [])
    })
  });
  return list;
}

const Aside = props => {
  const {collapsed} = props;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const collapseHandle = () => {
    dispatch(changeCollapse())
  }
  const clickMenu = e => {
    navigator(e.key);
  }
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={200}
      style={{background: '#000'}}
      onCollapse={collapseHandle}
    >
      <Menu
        theme='dark'
        mode="inline"
        style={{height: '100%',textAlign: 'left'}}
        defaultSelectedKeys={[getItems(menuList)[0].key]}
        items={getItems(menuList)}
        onClick={clickMenu}
      />
    </Sider>
  )
}
export default Aside;