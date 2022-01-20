import React from 'react';
import { Button, Card, Input, Form } from 'antd';
import { CardBody, CardHeader } from 'reactstrap';
import openNotification from '../Notification';
import { registerAction } from 'MiniProjects/TodoList/todoListSlice';
import { useDispatch } from 'react-redux';

const Register = ({ accounts }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (account) => {
    const { username, password } = account;
    const validate = username.length < 6 || username.length < 6;
    const isAvailable = accounts.find(x => x.username === username);
    if (isAvailable) {
      openNotification("warning", 'Cảnh báo', 'Tài khoản đã tồn tại!')
    } else {
      if (validate) {
        openNotification("warning", 'Cảnh báo', 'Username & password dài tối thiểu 6 ký tự!')
      } else {
        dispatch(registerAction({ username, password }));
        form.resetFields();
        openNotification("success", 'Chúc mừng', 'Đăng ký thành công.')
      }
    }
  };

  return (
    <Card style={{ width: 500, marginInline: 5 }} className="my-2">
      <CardHeader className="text-center">
        <h3>REGISTER</h3>
      </CardHeader>
      <CardBody>
        <Form
          form={form}
          layout="vertical"
          // initialValues={{ remember: true }}
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

          <Form.Item
            label="Confirm password"
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Register;