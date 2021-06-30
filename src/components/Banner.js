import React from "react";
import classes from "./Banner.module.css";

function Banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png)`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.banner__contents}>
        <h1 className={classes.banner__title}>Movie Name</h1>
        <div className={classes.banner__buttons}>
          <button className={classes.banner__button}>Play</button>
          <button className={classes.banner__button}>My List</button>
        </div>
        <h1 className={classes.banner__description}>
          {truncate("This is description", 150)}
        </h1>
        <div className={classes["banner--fadeBottom"]} />
      </div>
    </header>
  );
}

export default Banner;
