import React from "react";
import Plant from "./Plant";

const SessionPlant = (props) => {
  return (
    <Plant
      currentActivity={props.currentActivity}
      setCurrentActivity={props.setCurrentActivity}
      startStep={props.sessionStartStep}
      setStartStep={props.setSessionStartStep}
      GIFSArray={props.GIFSArray}
      setGIFSArray={props.setGIFSArray}
      currentGIF={props.currentGIF}
      setCurrentGIF={props.setCurrentGIF}
    />
  );
};

export default SessionPlant;
