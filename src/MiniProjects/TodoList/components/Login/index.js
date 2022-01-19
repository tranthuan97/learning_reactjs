import React from 'react';
import { Button, Card, Input, Form, Checkbox } from 'antd';
import { CardBody, CardHeader } from 'reactstrap';
import openNotification from '../Notification';
import { loginAction, setRememberLogAction } from 'MiniProjects/TodoList/todoListSlice';
import { useDispatch } from 'react-redux';

const Login = ({ accounts, isRegister, rememberLog }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (account) => {
  console.log("🚀 ~ file: index.js ~ line 13 ~ onFinish ~ account", account)
    const { username, password, remember } = account;
    const isAvailable = accounts.find(x => x.username === username && x.password === password);
    if (isAvailable) {
      console.log(remember);
      // dispatch(loginAction(true));
      // console.log(account);
      // if (remember) {
      //   dispatch(setRememberLogAction({ rememberLog: { isRemember: true, account }, isRegister }))
      // } else {
      //   dispatch(setRememberLogAction({ rememberLog: { isRemember: false, account: null }, isRegister }))
      // }
      openNotification("success", 'Chúc mừng', 'Đăng nhập thành công.')
    } else {
      openNotification("warning", 'Cảnh báo', 'Tài khoản hoặc mật khẩu không đúng !')
    }
  };

  React.useEffect(() => {
    if (isRegister) {
      const { username, password } = accounts[accounts.length - 1];
      form.setFieldsValue({
        username,
        password,
      });
      const account = { username, password, remember: rememberLog.isRemember }
      dispatch(setRememberLogAction({ rememberLog: { isRemember: rememberLog.isRemember, account }, isRegister: false }))
    } else if (rememberLog.isRemember) {
      const { account } = rememberLog;
      const { username, password, remember } = account
      form.setFieldsValue({
        username,
        password,
        remember
      });
    }
  }, [accounts, dispatch, form, isRegister, rememberLog])

  return (
    <Card style={{ width: 500, marginInline: 5 }} className="my-2">
      <CardHeader className="text-center">
        <h3>LOGIN</h3>
      </CardHeader>
      <CardBody style={{ textAlign: 'left' }}>
        <Form
          layout="vertical"
          name="basic"
          form={form}
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