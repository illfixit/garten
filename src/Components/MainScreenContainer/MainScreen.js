import React, { useState } from "react";
import Plant from "./Plant";
import Timer from "./Timer";
import Buttons from "./Buttons";

const MainScreen = (props) => {
  const [timeStep, setTimeStep] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const handleRangeInput = (e) => {
    // console.log("e", e.target.value);
    document.querySelector(
      ".timerBackground"
    ).style.backgroundPosition = `${100 - e.target.value}%`;
  };

  return (
    <div className="mainScreenContainer">
      {/* <FocusText /> */}
      {/* <div>
        You have focused <br /> for 6 hours 35 mins today.{" "}
      </div> */}
      <Plant
        timeStep={timeStep}
        setTimeStep={setTimeStep}
        timerActive={timerActive}
        setTimerActive={setTimerActive}
      />
      {/* <div>+ Work</div> */}
      {/* <FocusTag /> */}
      {/* <Timer
        timeStep={timeStep}
        setTimeStep={setTimeStep}
        timerActive={timerActive}
        setTimerActive={setTimerActive}
      /> */}
      {/* <input
        type="range"
        id="bg_position"
        name="bg_position"
        min="0"
        max="100"
        // value="50"
        onChange={handleRangeInput}
      ></input> */}
      {/* <input id="bg_url" placeholder="Paste link to your GIF here"></input> */}
      <Buttons timerActive={timerActive} setTimerActive={setTimerActive} />
    </div>
  );
};

export default MainScreen;
