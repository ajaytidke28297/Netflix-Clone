import React from "react";
import HomeScreen from "./components/HomeScreen";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <HomeScreen />
    </div>
  );
}

export default App;
