import {Button} from "antd";
import {useNavigate} from "react-router-dom";




const Logout = () => {
  const navigator = useNavigate();
  // 退出
  const logout = () => {
    localStorage.clear();
    navigator('/login');
  }


  return <Button type='text' style={{color: '#fff'}} onClick={logout}>退出</Button>
}

export default Logout;