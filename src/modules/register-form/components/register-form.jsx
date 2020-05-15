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
import validateField from "../../../utils/validate-field";

function RegisterForm(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const success = false;

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <BaseBlock>
        {!success ? (
          <Form className="register-form" onFinish={handleSubmit}>
            <Form.Item
              name="email"
              hasFeedback
              rules={[{ required: true, message: "Пожалуйста введите email" }]}
              validateStatus={validateField("email", touched, errors)}
              help={!touched.email ? null : errors.email}
            >
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="name"
              hasFeedback
              rules={[{ required: true, message: "Пожалуйста введите имя" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="Ваше имя"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="password"
              validateStatus={validateField("password", touched, errors)}
              rules={[{ required: true, message: "Пожалуйста введите пароль" }]}
              help={!touched.password ? null : errors.password}
            >
              <Input
                id="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="large"
                type="password"
                placeholder="пароль"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="repeat-password"
              hasFeedback
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
