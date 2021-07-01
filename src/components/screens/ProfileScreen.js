import React from "react";
import classes from "./ProfileScreen.module.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";

function ProfileScreen() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={classes.profileScreen}>
      <Nav />
      <div className={classes.profileScreen__body}>
        <h1>Edit Profile</h1>
        <div className={classes.profileScreen__info}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile"
          />
          <div className={classes.profileScreen__details}>
            <h2>{user.email}</h2>
            <div className={classes.profileScreen__plans}>
              <h3>Plans (Current Plan: premium)</h3>
              <button
                onClick={() => auth.signOut()}
                className={classes.profileScreen__signOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
