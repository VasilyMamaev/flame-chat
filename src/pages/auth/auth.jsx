import React from "react";

import "./auth.scss";
import { Route } from "react-router";
import LoginForm from "../../modules/login-form/index";
import RegisterForm from "../../modules/register-form/index";

const Auth = () => {
  return (
    <section className="auth">
      <Route exact path={["/", "/login"]} component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
    </section>
  );
};

export default Auth;
