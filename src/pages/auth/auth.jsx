import React from "react";

import "./auth.scss";
import { Route } from "react-router";
import LoginForm from "../../modules/login-form/components/login-form";
import RegisterForm from "../../modules/register-form/components/register-form";

const Auth = () => {
  return (
    <section className="auth">
      <Route exact path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </section>
  );
};

export default Auth;
