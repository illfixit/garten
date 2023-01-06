import React from "react";

const Buttons = ({ timerActive, setTimerActive, setAutoSwitch }) => {
  return timerActive ? (
    <React.Fragment>
      <button
        className="mainScreenButtons"
        onClick={() => {
          setTimerActive(false);
          setAutoSwitch(false);
        }}
      >
        Give Up
      </button>
    </React.Fragment>
  ) : (
    <button className="mainScreenButtons" onClick={() => setTimerActive(true)}>
      Start
    </button>
  );
};

export default Buttons;
