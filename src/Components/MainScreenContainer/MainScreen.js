import React, { useState } from "react";

import SessionPlant from "./SessionPlant";
import PausePlant from "./PausePlant";

import SessionControl from "./SessionControl";

const MainScreen = (props) => {
  const [currentActivity, setCurrentActivity] = useState("pause");
  const [sessionStartStep, setSessionStartStep] = useState(9);
  const [pauseStartStep, setPauseStartStep] = useState(1);

  // const handleRangeInput = (e) => {
  //   // console.log("e", e.target.value);
  //   document.querySelector(
  //     ".timerBackground"
  //   ).style.backgroundPosition = `${100 - e.target.value}%`;
  // };

  return (
    <div className="mainScreenContainer">
      <SessionControl
        currentActivity={currentActivity}
        setCurrentActivity={setCurrentActivity}
      />

      {currentActivity === "session" ? (
        <SessionPlant
          currentActivity={currentActivity}
          setCurrentActivity={setCurrentActivity}
          sessionStartStep={sessionStartStep}
          setSessionStartStep={setSessionStartStep}
        />
      ) : (
        <PausePlant
          currentActivity={currentActivity}
          setCurrentActivity={setCurrentActivity}
          pauseStartStep={pauseStartStep}
          setPauseStartStep={setPauseStartStep}
        />
      )}

      {/* <input
        type="range"
        id="bg_position"
        name="bg_position"
        min="0"
        max="100"
        // value="50"
        onChange={handleRangeInput}
      ></input>
      <input id="bg_url" placeholder="Paste link to your GIF here"></input> */}
    </div>
  );
};

export default MainScreen;
