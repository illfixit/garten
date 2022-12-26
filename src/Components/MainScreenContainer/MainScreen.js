import React, { useState } from "react";
import Plant from "./Plant";
import Timer from "./Timer";
import Buttons from "./Buttons";

const MainScreen = (props) => {
  const [timeStep, setTimeStep] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  return (
    <div className="mainScreenContainer">
      {/* <FocusText /> */}
      <div>
        You have focused <br /> for 6 hours 35 mins today.{" "}
      </div>
      <Plant setTimeStep={setTimeStep} timerActive={timerActive} />
      <div>+ Work</div>
      {/* <FocusTag /> */}
      <Timer
        timeStep={timeStep}
        setTimeStep={setTimeStep}
        timerActive={timerActive}
        setTimerActive={setTimerActive}
      />
      <Buttons timerActive={timerActive} setTimerActive={setTimerActive} />
    </div>
  );
};

export default MainScreen;
