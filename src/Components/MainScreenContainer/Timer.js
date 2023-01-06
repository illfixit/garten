import React, { useEffect, useState } from "react";

const minMinutes = 5;

const Timer = ({
  startStep,
  timeStep,
  setTimeStep,
  timerActive,
  setTimerActive,
  currentActivity,
  setCurrentActivity,
  GIFSArray,
  currentGIF,
  numberOfSessions,
  currentSession,
  setCurrentSession,
  autoSwitch,
  setAutoSwitch,
}) => {
  const [totalSeconds, setTotalSeconds] = useState((5 + startStep * 5) * 60);
  const [intrvl, setIntrvl] = useState(0);

  useEffect(() => {
    setTimeStep(startStep);
  });

  const formatTime = (time) => time.toString().padStart(2, "0");

  const audio = new Audio("./static/sounds/uplifting-flute.mp3");

  useEffect(() => {
    setTotalSeconds((minMinutes + timeStep * 5) * 60);
  }, [timeStep, startStep]);

  useEffect(() => {
    // console.log("timerActive ", timerActive, " autoSwitch ", autoSwitch);
    if (
      autoSwitch &&
      currentSession !== 1 &&
      currentSession <= numberOfSessions + 1
    ) {
      console.log(currentSession, numberOfSessions, currentActivity);

      if (currentSession > numberOfSessions) {
        if (currentActivity === "pause") setTimerActive(true);
        if (currentActivity === "session") setTimerActive(false);
      } else {
        setTimerActive(true);
      }
    }
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
      setTotalSeconds((minMinutes + timeStep * 5) * 60);
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
    if (currentActivity === "session") setCurrentSession(currentSession + 1);
    setCurrentActivity(currentActivity === "pause" ? "session" : "pause");
    if (autoSwitch) {
      setTimerActive(true);
    } else {
      setTimerActive(false);
    }
    // setTotalSeconds((5 + timeStep * 5) * 60);
    // setTimeStep(timeStep);
  }

  if (totalSeconds <= 0) {
    minutes = 0;
    seconds = 0;
  }

  // console.log(GIFSArray[currentGIF]);
  // backgroundImage: GIFSArray[currentGIF]

  return (
    <div className="timerContainer">
      <div
        className={`timerBackground ${
          currentActivity === "session"
            ? "sessionBackground"
            : "pauseBackground"
        }`}
        style={{ backgroundImage: `url(${GIFSArray[currentGIF]})` }}
      ></div>
      <div className="timer">
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <div className="timerText">
        {currentActivity === "session"
          ? `Session ${currentSession}/${numberOfSessions}`
          : "Pause"}
      </div>
    </div>
  );
};

export default Timer;
