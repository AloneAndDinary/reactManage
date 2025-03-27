const menuList = [
  {
    path: '/home',
    name: 'home',
    label: '首页',
    icon: 'BankOutlined',
    url: '/home/index'
  },
  {
    path: '/user',
    name: 'user',
    label: '人员管理',
    icon: 'UserDeleteOutlined',
    children: [
      {
        path: '/user/orgUser',
        name: 'orgUser',
        label: '组织人员'
      }
    ]
  }
]
export default menuList;