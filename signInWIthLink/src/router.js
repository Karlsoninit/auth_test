import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { SignOut } from "./pages/Register";

export const useRouter = isAuthentication => {
  if (!isAuthentication) {
    return (
      <Switch>
        <Route path="/register" component={SignOut} />
        <Redirect to="/register" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};
