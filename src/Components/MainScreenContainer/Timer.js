import React from "react";

const Timer = (props) => {
  return <div className="timer">{10 + props.timeStep * 5}:00</div>;
};

export default Timer;
