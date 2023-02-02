import React, { useEffect, useState } from "react";
import Radius from "./Radius";
import Timer from "./Timer";
import PlantSettings from "./PlantSettings";
import SessionSettings from "./SessionSettings";

import Buttons from "./Buttons";

const Plant = (props) => {
  // console.log(props);
  const [timeStep, setTimeStep] = useState(props.startStep);

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
      <div className={`plantContainer ${props.timerActive ? "" : ""}`}>
        <Radius
          plantContainerBoundaries={plantContainerBoundaries}
          setTimeStep={setTimeStep}
          timerActive={props.timerActive}
          startStep={props.startStep}
          setStartStep={props.setStartStep}
        />

        <div className="plant">
          <Timer
            startStep={props.startStep}
            timeStep={timeStep}
            setTimeStep={setTimeStep}
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
      <Buttons
        timerActive={props.timerActive}
        setTimerActive={props.setTimerActive}
        setAutoSwitch={props.setAutoSwitch}
      />
      <SessionSettings
        currentSession={props.currentSession}
        setCurrentSession={props.setCurrentSession}
        numberOfSessions={props.numberOfSessions}
        setNumberOfSessions={props.setNumberOfSessions}
        autoSwitch={props.autoSwitch}
        setAutoSwitch={props.setAutoSwitch}
        timerActive={props.timerActive}
        setTimerActive={props.setTimerActive}
      />
      <PlantSettings
        currentActivity={props.currentActivity}
        GIFSArray={props.GIFSArray}
        setGIFSArray={props.setGIFSArray}
        currentGIF={props.currentGIF}
        setCurrentGIF={props.setCurrentGIF}
      />
    </>
  );
};

export default Plant;
