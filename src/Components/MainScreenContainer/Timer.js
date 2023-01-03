import React, { useEffect, useState } from "react";

const Timer = ({
  startStep,
  timeStep,
  setTimeStep,
  timerActive,
  setTimerActive,
  currentActivity,
  setCurrentActivity,
}) => {
  const [totalSeconds, setTotalSeconds] = useState((5 + startStep * 5) * 60);
  const [intrvl, setIntrvl] = useState(0);

  useEffect(() => {
    setTimeStep(startStep);
  });

  const formatTime = (time) => time.toString().padStart(2, "0");

  const audio = new Audio("./static/sounds/uplifting-flute.mp3");

  useEffect(() => {
    setTotalSeconds((5 + timeStep * 5) * 60);
  }, [timeStep, startStep]);

  useEffect(() => {
    if (timerActive) {
      setIntrvl(
        setInterval(() => {
          if (timerActive === true) {
            setTotalSeconds((totalSeconds) => totalSeconds - 1);
          }
        }, 1000)
      );
    } else {
      setTimeStep(timeStep);
      setTotalSeconds((5 + timeStep * 5) * 60);
      clearInterval(intrvl);
    }

    return () => clearInterval(intrvl);
  }, [timerActive]);

  // console.log(totalSeconds);

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - Math.floor(totalSeconds / 60) * 60;

  if (totalSeconds === 0) {
    audio.play();
    clearInterval(intrvl);
    setTimerActive(false);
    setCurrentActivity(currentActivity === "pause" ? "session" : "pause");
    // setTotalSeconds((5 + timeStep * 5) * 60);
    // setTimeStep(timeStep);
  }

  if (totalSeconds <= 0) {
    minutes = 0;
    seconds = 0;
  }

  return (
    <div className="timerContainer">
      <div
        className={`timerBackground ${
          currentActivity === "session"
            ? "sessionBackground"
            : "pauseBackground"
        }`}
      ></div>
      <div className="timer">
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
    </div>
  );
};

export default Timer;
