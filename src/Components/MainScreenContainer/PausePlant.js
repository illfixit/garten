import React from "react";
import Plant from "./Plant";

const PausePlant = (props) => {
  return (
    <Plant
      currentActivity={props.currentActivity}
      setCurrentActivity={props.setCurrentActivity}
      startStep={props.pauseStartStep}
      setStartStep={props.setPauseStartStep}
    />
  );
};

export default PausePlant;
