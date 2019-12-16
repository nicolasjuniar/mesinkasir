import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./component/login/Login.js";
import Halaman from "./component/Halaman.js";

export const SwitchRouter = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/home">
      <Halaman />
    </Route>
    <Route path="/">
      <Login />
    </Route>
  </Switch>
);
