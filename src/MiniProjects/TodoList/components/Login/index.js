import React from 'react';
import { Button, Card, Input, Form, Checkbox } from 'antd';
import { CardBody, CardHeader } from 'reactstrap';
import openNotification from '../Notification';

const Login = ({ setLogin, accounts, isRegister, setIsRegister, rememberLog, setRememberLog }) => {
  const formRef = React.useRef();
  const onFinish = (account) => {
    const { username, password, remember } = account;
    const isAvailable = accounts.find(x => x.username === username && x.password === password);
    if (isAvailable) {
      setLogin(true);
      if (remember) {
        setRememberLog({ isRemember: true, account })
      } else {
        setRememberLog({ isRemember: false, account: null })
      }
      openNotification("success", 'Chúc mừng', 'Đăng nhập thành công.')
    } else {
      openNotification("warning", 'Cảnh báo', 'Tài khoản hoặc mật khẩu không đúng !')
    }
  };

  React.useEffect(() => {
    if (isRegister) {
      const { username, password } = accounts[accounts.length - 1];
      formRef.current.setFieldsValue({
        username,
        password,
      });
      setIsRegister(false);
      setRememberLog({ isRemember: rememberLog.isRemember, account: { username, password, remember: rememberLog.isRemember } })
    } else if (rememberLog.isRemember) {
      const { account } = rememberLog;
      const { username, password, remember } = account
      formRef.current.setFieldsValue({
        username,
        password,
        remember
      });
    }
  }, [accounts, isRegister, rememberLog, setIsRegister, setRememberLog])

  return (
    <Card style={{ width: 500, marginInline: 5 }} className="my-2">
      <CardHeader className="text-center">
        <h3>LOGIN</h3>
      </CardHeader>
      <CardBody style={{ textAlign: 'left' }}>
        <Form
          layout="vertical"
          name="basic"
          ref={formRef}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            hasFeedback
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName={rememberLog.isRemember && 'checked'} >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Login;