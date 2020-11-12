import React from "react";
import { Redirect, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
