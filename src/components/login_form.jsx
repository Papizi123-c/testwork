import { Button, Checkbox, Form, Input, message} from 'antd';
import { useNavigate } from 'react-router-dom';

var navigate;

const success = (values) =>{
    var user = document.cookie;
    user = user.indexOf('user');
    if(user === -1){
        if (values['login'] === 'admin' && values['password'] === 'admin'){
            message.open({
                type: 'success',
                content: 'Вы успешно авторизировались!',
            });
            if(values['remember'] === true){
                document.cookie = "user=admin; max-age=160000";
            }
            else {
                document.cookie = "user=admin; max-age=360"
            }
            navigate('cards', {replace: true});
        }
        else {
            message.open({
                type: 'error',
                content: 'Вы ввели неверный логин или пароль!',
            });
        }
    }
}

const LoginForm = () => {
    navigate = useNavigate();
        return (
                <Form
                    name='loginform'
                    labelCol={{ span:8 }}
                    wrapperCol={{ span: 8 }}
                    onFinish={success}
                    initialValues={{remember: false}}
                    autoComplete='off'
                >
                    <Form.Item
                        label="Логин"
                        name="login"
                        rules={[{ required: true, message: 'Обязательное поле!', }]}
                    >
                        <Input></Input>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: 'Обязательное поле!', }]}
                    >
                        <Input.Password></Input.Password>
                    </Form.Item>

                    <Form.Item 
                        label="Запомнить"
                        name="remember"
                        valuePropName='checked'
                    >
                        <Checkbox></Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, spna: 6}}>
                        <Button type="primary" htmlType='submit'>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
        )
};   



export default LoginForm;