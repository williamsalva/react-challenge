import {useDispatch} from 'react-redux'
import actions from 'redux/Authenticate/actions';
import {useSelector} from 'react-redux'
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import logo from '../images/log.png'


function LoginPage() {
  const {loader} = useSelector(state => state.authenticateReducer)

  const dispatch = useDispatch();

  let onFinish = () => {
    dispatch({
      type: actions.LOGIN,
      payload: {'email': 'eve.holt@reqres.in', 'password': 'cityslicka'},
    });
  };

  return (
    <>
      
      <div className="container" style={{flexDirection: 'column'}}>     
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
          <img style={{width: '200px'}} src={logo} alt="" />
        </div> 
        <Form
          name="normal_login"
          className="form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'por favor ingresa tu usuario!',
              },
            ]}
          >
            <Input size="large"
              prefix={<UserOutlined className="site-form-item-icon"/>}
              placeholder="Usuario"
              autoComplete="username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu contraseña!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="Contraseña"
              size="large"
              autoComplete="current-password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Recordarme</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button loading={loader} type="primary" htmlType="submit" className="login-form-button"
              size="large">Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default LoginPage;
