import React from "react";
import { Route } from "react-router-dom";

import Auth from "./pages/auth/auth";
import Home from "./pages/home/home";

const App = () => {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login", "/register"]} component={Auth} />
      <Route exact path="/im" component={Home} />
    </div>
  );
};

export default App;
