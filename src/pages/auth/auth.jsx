import React from "react";
import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./auth.scss";
import BaseBlock from "../../components/base-block/base-block";
import Button from "../../components/button/button";

const Auth = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className="auth">
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста войдите в свой аккаунт</p>
      </div>
      <BaseBlock>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Пожалуйста введите логин" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="Логин"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Пожалуйста введите пароль" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Войти в аккаунт
            </Button>
          </Form.Item>
          <a href="#" className="auth__register-link">
            Зарегистрироваться
          </a>
        </Form>
      </BaseBlock>
    </section>
  );
};

export default Auth;
