import React from "react";
import Plant from "./Plant";

const PausePlant = (props) => {
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
    />
  );
};

export default PausePlant;
