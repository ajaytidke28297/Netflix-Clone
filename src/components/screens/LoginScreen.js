import React, { useState } from "react";
import classes from "./LoginScreen.module.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={classes.loginScreen}>
      <div className={classes.loginScreen__background}>
        <img
          className={classes.loginScreen__logo}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix logo"
        />
        <button
          onClick={() => setSignIn(true)}
          className={classes.loginScreen__button}
        >
          Sign In
        </button>
        <div className={classes.loginScreen__gradient} />
      </div>
      <div className={classes.loginScreen__body}>
        {signIn ? (
          <SignUpScreen />
        ) : (
          <React.Fragment>
            <h1>Unlimited films, TV Programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter you email to create or restart your
              membership
            </h3>
            <div className={classes.loginScreen__input}>
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className={classes.loginScreen__getStarted}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
