import { Typography, message, Flex, Divider, Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const { Title } = Typography;

function Header() {
    const navigate = useNavigate();

    useEffect(() => {
        let user = document.cookie;
        user = user.indexOf('user');
        if (user === -1){
            message.open({
                type: "error",
                content: "Вы не авторизованы!"
            });
            navigate('/', {replace: true});
        }
    }, []);

    const logOut = () => {
        document.cookie = "user=; max-age=0; path=/";
        navigate('/', {replace: true});
        message.open({
            type: "info",
            content: 'Вы успешно вышли из совего аккаунта!'
        });
    };

    return(   
        <>
            <Flex justify='center' align='center'>
                <Title level={2}>TestWork</Title>
            </Flex>
            <div style={{position: 'absolute', top: 20, right: 15}}>
                <Button icon={<LoginOutlined />} type='primary' onClick={() => logOut()}>Выйти</Button>
            </div>
            <Divider/>
        </> 
        
    );

}

export default Header;