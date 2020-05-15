import React from "react";
import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import Button from "../../../components/button/button";
import BaseBlock from "../../../components/base-block/base-block";
import validateField from "../../../utils/validate-field";

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста войдите в свой аккаунт</p>
      </div>
      <BaseBlock>
        <Form className="login-form" onFinish={handleSubmit}>
          <Form.Item
            name="email"
            hasFeedback
            rules={[{ required: true, message: "Пожалуйста введите email" }]}
            validateStatus={validateField("email", touched, errors)}
            help={!touched.email ? null : errors.email}
          >
            <Input
              id="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="password"
            validateStatus={
              touched.password && values.password === "" ? "error" : ""
            }
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
          <Link to="/register" className="auth__register-link">
            Зарегистрироваться
          </Link>
        </Form>
      </BaseBlock>
    </div>
  );
};

export default LoginForm;
