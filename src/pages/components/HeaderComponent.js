import {Layout,Avatar, Dropdown,Space, Button} from "antd";
import {UserOutlined, DownOutlined} from '@ant-design/icons'
import DialogModal from "./DialogModal";
import React from "react";
import {Form,Radio,Input} from "antd";
import Logout from "./Logout";
class HeaderComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dialogFlag: false,
      componentDisabled: true,
      contentForm: {
        gender: '1',
        userName: '',
        phone: ''
      }
    }
  }
  // 设置弹框展示状态
  setModalStatus = (flag) => {
    this.setState({
      ...this.state,
      dialogFlag: flag
    })
  }
  // 菜单点击事件
  onMenuClick = ({key})  => {
    this.setModalStatus(true);
  };
  // 弹框确定事件回调
  onOkHandle = () =>{
    this.setModalStatus(false);
  }

  // 设置表单数据回填
  setFormValue(e,key) {
    this.setState({
      ...this.state,
      contentForm: {
        ...this.state.contentForm,
        [key]: e.target.value
      }
    });
  }
  render() {
    const items = [
      {label: '个人信息', key: '0'},
      {type: 'divider',},
      {label: '修改密码', key: '1'}
    ];
    const {sysName, userInfo} = this.props;
    const {contentForm,dialogFlag,componentDisabled} = this.state;
    const {Header} = Layout;
    return (
      <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{color: '#fff'}}>{sysName}</div>
        <div style={{color: '#fff'}}>
          <span style={{marginRight: '20px'}}>欢迎您</span>
          <Dropdown menu={{items, onClick:this.onMenuClick}}  arrow placement="bottom">
            <Space>
              <Avatar style={{background: '#BFBFBF'}} icon={<UserOutlined/>}></Avatar>
              <span>{userInfo.userName}</span>
              <DownOutlined/>
            </Space>
          </Dropdown>
          <Logout></Logout>
        </div>
        <DialogModal title={'个人信息'} dialogFlag={dialogFlag} onOkHandle={this.onOkHandle} setModalStatus={this.setModalStatus}>
          <div>
            <Form
              labelCol={{span: 4,}}
              wrapperCol={{span: 14,}}
              layout="horizontal"
              disabled={componentDisabled}
              style={{maxWidth: 600}}
              initialValues={{userName: userInfo.userName,gender: userInfo.gender,phone: userInfo.phone}}
            >
              <Form.Item label='姓名' name='userName'>
                <Input disabled={componentDisabled} value={contentForm.userName} onChange={(e) => this.setFormValue(e,'userName')}/>
              </Form.Item>
              <Form.Item label="性别" name='gender'>
                <Radio.Group disabled={componentDisabled} value={contentForm.gender} defaultValue={'1'}  onChange={(e) => this.setFormValue(e,'gender')}>
                  <Radio value="1"> 男 </Radio>
                  <Radio value="0"> 女 </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label='手机号' name='phone'>
                <Input disabled={componentDisabled} value={contentForm.phone} onChange={(e) => this.setFormValue(e,'phone')}/>
              </Form.Item>
            </Form>
          </div>
        </DialogModal>
      </Header>
    )
  }
}


export default HeaderComponent;