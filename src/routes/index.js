import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/home";

function routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  );
}

export default routes;