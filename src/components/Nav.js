import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";

function Nav() {
  const [show, setShow] = useState(false);

  const transigionNavBar = () => {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transigionNavBar);
    return () => window.removeEventListener("scroll", transigionNavBar);
  }, []);

  return (
    <div className={classes.nav + " " + (show && classes.nav__black)}>
      <div className={classes.nav__contents}>
        <img
          className={classes.nav__logo}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <img
          className={classes.nav__avatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
