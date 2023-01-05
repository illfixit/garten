import React from "react";
import Plant from "./Plant";

const PausePlant = (props) => {
  console.log(props);
  return (
    <Plant
      currentActivity={props.currentActivity}
      setCurrentActivity={props.setCurrentActivity}
      startStep={props.pauseStartStep}
      setStartStep={props.setPauseStartStep}
      GIFSArray={props.GIFSArray}
      setGIFSArray={props.setGIFSArray}
      currentGIF={props.currentGIF}
      setCurrentGIF={props.setCurrentGIF}
      numberOfSessions={props.numberOfSessions}
      setNumberOfSessions={props.setNumberOfSessions}
      currentSession={props.currentSession}
      setCurrentSession={props.setCurrentSession}
    />
  );
};

export default PausePlant;
