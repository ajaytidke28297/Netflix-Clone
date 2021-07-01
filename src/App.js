import React from "react";
import HomeScreen from "./components/HomeScreen";
import classes from "./App.module.css";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
