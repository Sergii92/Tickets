import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import SessionPage from "../pages/SessionPage";
import { NAVIGATION } from "../constants/navigations";

const Routes = () => {
  return (
    <Switch>
      <Route path={NAVIGATION.SESSION} exact>
        <SessionPage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
