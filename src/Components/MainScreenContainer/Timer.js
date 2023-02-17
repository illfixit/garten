import React, { useEffect, useState } from "react";

const minMinutes = 5;
// const sec = 1;
const stepLength = 5;

const testing_value = 1;

const Timer = ({
  startStep,
  // timeStep,
  // setTimeStep,
  setStartStep,
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
  const [totalSeconds, setTotalSeconds] = useState(
    (minMinutes + startStep * stepLength) * 60
  );
  const [intrvl, setIntrvl] = useState(0);

  const formatTime = (time) => time.toString().padStart(2, "0");

  const audio = new Audio("./static/sounds/uplifting-flute.mp3");

  useEffect(() => {
    setTotalSeconds((minMinutes + startStep * stepLength) * 60);
  }, [startStep]);

  useEffect(() => {
    if (timerActive) {
      setIntrvl(
        setInterval(() => {
          if (timerActive === true) {
            setTotalSeconds((totalSeconds) => {
              // console.log(totalSeconds);
              document.getElementsByClassName(
                "plantContainer"
              )[0].style.background = `conic-gradient(var(--mainColor) ${(totalSeconds /
                ((minMinutes + startStep * stepLength) * 60)) *
                360}deg, var(--secondaryColor) 0deg)`;
              return totalSeconds - 1;
            });
          }
        }, 1000 * testing_value)
      );
    } else {
      setTotalSeconds((minMinutes + startStep * stepLength) * 60);
      clearInterval(intrvl);
    }

    return () => clearInterval(intrvl);
  }, [timerActive]);

  // console.log(totalSeconds);

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - Math.floor(totalSeconds / 60) * 60;

  if (totalSeconds === 0 && timerActive) {
    // console.log("timeStep", timeStep);
    // console.log("totalSeconds === 0");
    audio.play();
    clearInterval(intrvl);
    // console.log(currentActivity, " ", currentSession, "/", numberOfSessions);

    // console.log(autoSwitch, timerActive);

    if (currentSession < numberOfSessions) {
      // console.log(currentSession, " < ", numberOfSessions);
      if (currentActivity === "pause") {
        setCurrentSession(currentSession + 1);
      }

      setCurrentActivity(currentActivity === "pause" ? "session" : "pause");
      setTimerActive(autoSwitch);
    }

    if (currentSession === numberOfSessions) {
      // console.log(currentSession, " = ", numberOfSessions);

      if (currentActivity === "session") {
        setCurrentActivity(currentActivity === "pause" ? "session" : "pause");
        setTimerActive(autoSwitch);
      } else if (currentActivity === "pause") {
        setAutoSwitch(false);
        setTimerActive(false);
      }
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
          : `Pause`}
      </div>
    </div>
  );
};

export default Timer;
