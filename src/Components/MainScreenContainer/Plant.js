import React, { useEffect, useState } from "react";
import Radius from "./Radius";
import Timer from "./Timer";

import Buttons from "./Buttons";

const Plant = (props) => {
  const [timeStep, setTimeStep] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // if (document.querySelector("plantContainer")) {
  //   let plantContainer = document
  //     .querySelector("plantContainer")
  //     .getBoundingClientRect();
  //   console.log(plantContainer);
  // }

  let plantContainerBoundaries = null;

  useEffect(() => {
    if (document.querySelector(".plantContainer")) {
      plantContainerBoundaries = document
        .querySelector(".plantContainer")
        .getBoundingClientRect();
      // console.log(plantContainerBoundaries);
    }
  }, []);

  return (
    <>
      <div className={`plantContainer ${timerActive ? "noRadius" : ""}`}>
        <Radius
          plantContainerBoundaries={plantContainerBoundaries}
          setTimeStep={setTimeStep}
          timerActive={timerActive}
          startStep={props.startStep}
          setStartStep={props.setStartStep}
        />

        <div className="plant">
          <Timer
            startStep={props.startStep}
            timeStep={timeStep}
            setTimeStep={setTimeStep}
            timerActive={timerActive}
            setTimerActive={setTimerActive}
            currentActivity={props.currentActivity}
            setCurrentActivity={props.setCurrentActivity}
          />
        </div>
      </div>
      <Buttons timerActive={timerActive} setTimerActive={setTimerActive} />
    </>
  );
};

export default Plant;
