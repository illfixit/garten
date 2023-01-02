import React, { useEffect, useRef, useState } from "react";

const Timer = ({ timeStep, setTimeStep, timerActive, setTimerActive }) => {
  const [totalSeconds, setTotalSeconds] = useState(600);
  const [intrvl, setIntrvl] = useState(0);

  const formatTime = (time) => time.toString().padStart(2, "0");

  useEffect(() => {
    setTotalSeconds((10 + timeStep * 5) * 60);
  }, [timeStep]);

  useEffect(() => {
    if (totalSeconds == -1) {
      clearInterval(intrvl);
      setTimerActive(false);
      setTotalSeconds((10 + timeStep * 5) * 60);
      setTimeStep(timeStep);
    }
  });

  useEffect(() => {
    if (timerActive) {
      setIntrvl(
        setInterval(() => {
          if (timerActive == true) {
            setTotalSeconds((totalSeconds) => totalSeconds - 1);
          }
        }, 1000)
      );
    } else {
      setTimeStep(timeStep);
      setTotalSeconds((10 + timeStep * 5) * 60);
      clearInterval(intrvl);
    }

    return () => clearInterval(intrvl);
  }, [timerActive]);

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - Math.floor(totalSeconds / 60) * 60;

  return (
    <div className={`timerContainer`}>
      <div className="timerBackground"></div>
      <div className="timer">
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
    </div>
  );
};

export default Timer;
