import React, { useEffect, useRef } from "react";
import Radius from "./Radius";
import Timer from "./Timer";

const Plant = (props) => {
  // console.log(props);

  const plantContainerBoundaries = useRef(null);

  useEffect(() => {
    if (document.querySelector(".plantContainer")) {
      plantContainerBoundaries.current = document
        .querySelector(".plantContainer")
        .getBoundingClientRect();
    }
  }, []);

  return (
    <>
      <div
        className={`plantContainer ${props.timerActive ? "" : ""}`}
        id={props.currentActivity}
      >
        <Radius
          plantContainerBoundaries={plantContainerBoundaries.current}
          timerActive={props.timerActive}
          startStep={props.startStep}
          setStartStep={props.setStartStep}
        />

        <div className="plant">
          <Timer
            startStep={props.startStep}
            setStartStep={props.setStartStep}
            timerActive={props.timerActive}
            setTimerActive={props.setTimerActive}
            currentActivity={props.currentActivity}
            setCurrentActivity={props.setCurrentActivity}
            GIFSArray={props.GIFSArray}
            currentGIF={props.currentGIF}
            numberOfSessions={props.numberOfSessions}
            currentSession={props.currentSession}
            setCurrentSession={props.setCurrentSession}
            autoSwitch={props.autoSwitch}
            setAutoSwitch={props.setAutoSwitch}
          />
        </div>
      </div>
    </>
  );
};

export default Plant;
