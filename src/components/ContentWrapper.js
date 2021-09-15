import React from "react";
import { Switch, Route } from "react-router";
import Login from "./Login";
import Home from "./Home";

export default function ContentWrapper() {
  return (
    <div className="content-wrapper">
      <div>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </div>
    </div>
  );
}
