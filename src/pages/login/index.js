import {Form, Input,Button} from "antd";
import './index.css';
import {useDispatch} from "react-redux";
import {setUserInfo} from "../../store/reducers/userReducer";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRules = {
    username: [{ required: true, message: '请输入账号!' }],
    password: [{ required: true, message: '请输入密码!' }]
  }

  const onFinish= (values) => {
    dispatch(setUserInfo(111));
    navigate('/home');
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div className='loginContainer'>
      <div className="loginPanel">
        <div className='loginContent'>
          <Form
            name="basic"
            labelCol={{span: 3}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label='账号' name='username' rules={formRules.username}>
              <Input/>
            </Form.Item>
            <Form.Item label="密码" name="password" rules={formRules.password}>
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