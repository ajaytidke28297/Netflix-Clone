import React, { useEffect } from "react";
import HomeScreen from "./components/HomeScreen";
import classes from "./App.module.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "./components/screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./features/userSlice";
import ProfileScreen from "./components/screens/ProfileScreen";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          userActions.login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(userActions.logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className={classes.app}>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/profile" exact>
            <ProfileScreen />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
