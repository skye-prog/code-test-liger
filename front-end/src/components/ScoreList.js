import React, { useEffect } from "react";
// import data from "../data.js";
import teamImg1 from "../Imgs/be7765eabc7e61d8abc9.png";
import teamImg2 from "../Imgs/99aece48307946e682e7.png";
import classes from "./ScoreList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { listscore } from "../store/actions/scoreActions";

function ScoreList() {
  const dispatch = useDispatch();
  const scoreList = useSelector((state) => state.score);

  useEffect(() => {
    dispatch(listscore());
  }, [dispatch]);

  return (
    <div>
      {scoreList.loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <div className={classes.score_container}>
            <div className={classes.team}>
              <img src={teamImg1} alt='img' />
              <div>{scoreList.scores.home_team.name}</div>
            </div>
            <div className={classes.score}>
              <div>{scoreList.scores.home_team.score}</div>
              <div>/</div>
              <div>{scoreList.scores.away_team.score}</div>
            </div>
            <div className={classes.team}>
              <img src={teamImg2} alt='img' />
              <div>{scoreList.scores.away_team.name}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScoreList;
