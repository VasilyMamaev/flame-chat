import React from "react";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import BaseBlock from "../../../components/base-block/base-block";
import Button from "../../../components/button/button";

function RegisterForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const success = true;

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <BaseBlock>
        {!success ? (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="E-mail"
              rules={[{ required: true, message: "Пожалуйста введите E-mail" }]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="E-mail"
              />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Пожалуйста введите имя" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="Ваше имя"
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
                placeholder="пароль"
              />
            </Form.Item>
            <Form.Item
              name="repeat-password"
              rules={[
                { required: true, message: "Пожалуйста повторите пароль" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="large"
                type="password"
                placeholder="повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link to="/login" className="auth__register-link">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <CheckCircleTwoTone style={{ fontSize: "40px" }} />
            <h3>Подтвердите свой аккаунт</h3>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </BaseBlock>
    </div>
  );
}

export default RegisterForm;
