import React from "react";
import logoImg from "../Imgs/592a99a3810f6538b87c.png";
import ScoreList from "./ScoreList";
import classes from "./ScoreScreen.module.css";
function ScoreScreen() {
  return (
    <div className={classes.screencontainer}>
      <div className={classes.Parallelogram1}></div>
      <div className={classes.Parallelogram2}></div>
      <div className={classes.Parallelogram3}></div>
      <div className={classes.Parallelogram4}></div>
      <div className={classes.Parallelogram5}></div>
      <div className={classes.name}>
        <p>Natioanl Basketball Association</p>
      </div>
      <div className={classes.logoimg}>
        <img src={logoImg} alt='img' />
      </div>
      <div className={classes.scoreshow}>
        <ScoreList />
      </div>
      <div className={classes.description}>
        <p>SECOND QUARTER</p> <p>14:37</p>
      </div>
      <div className={classes.address}>
        <p>
          <i className='fas fa-map-marker-alt'></i> UNITED CENTER
        </p>
      </div>
    </div>
  );
}

export default ScoreScreen;
