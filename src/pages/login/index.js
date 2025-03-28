import {Form, Input,Button} from "antd";
import './index.css';
import {useDispatch} from "react-redux";
import {setUserInfo} from "../../store/reducers/userReducer";
import {useNavigate} from "react-router-dom";
import {login, getUser} from "../../utils/http";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRules = {
    username: [{ required: true, message: '请输入账号!' }],
    password: [{ required: true, message: '请输入密码!' }]
  }

  const onFinish= (values) => {
    const params = {
      ...values
    }
    login(params).then(res => {
      if(res.code === 200) {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        const params = {
          token: res.data.token
        }
        getUser(params).then(res => {
          if(res.code === 200) {
            console.log(res.data)
            dispatch(setUserInfo(res.data.userInfo));
            navigate('/home');
          }
        })
      }
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div className='loginContainer'>
      <div className="loginPanel">
        <div className='loginContent'>
          <div className="title">
            <span>后台管理系统</span>
          </div>
          <Form
            name="basic"
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item className='label' label='账号' name='username' rules={formRules.username}>
              <Input/>
            </Form.Item>
            <Form.Item className='label' label="密码" name="password" rules={formRules.password}>
              <Input.Password/>
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" style={{width: '100%'}}>登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login;