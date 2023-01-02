import React, { useEffect, useRef, useState } from "react";

const Buttons = ({ timerActive, setTimerActive }) => {
  return timerActive ? (
    <React.Fragment>
      <button
        className="mainScreenButtons"
        onClick={() => setTimerActive(false)}
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
