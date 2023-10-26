import { Space, Divider } from 'antd';
import LoginForm from "./components/login_form";
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  useEffect(() =>{
    let user = document.cookie;
    user = user.indexOf('user');
    if (user !== -1){
      navigate('cards', {replace: true});
    }
  }, []);

    return (
      <>
        <Space direction='vertical' size={[0, 48]} style={{ maxWidth: '100%' }}>
          <Divider></Divider>
        </Space>
        <LoginForm />
      </>
    );
}

export default App;
