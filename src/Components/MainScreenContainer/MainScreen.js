import React, { useEffect, useState } from "react";

import Plant from "./Plant";

import StartStopButton from "./StartStopButton";
import SessionSettings from "./SessionSettings";
import GIFSettings from "./GIFSettings";

import ToggleViewButton from "./ToggleViewButton";

import SessionPauseButton from "./SessionPauseButton";

const MainScreen = (props) => {
  const [currentActivity, setCurrentActivity] = useState("session");

  const [pauseStartStep, setPauseStartStep] = useState(1);
  const [sessionStartStep, setSessionStartStep] = useState(9);

  const [numberOfSessions, setNumberOfSessions] = useState(2);
  const [currentSession, setCurrentSession] = useState(1);
  const [autoSwitch, setAutoSwitch] = useState(true);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("pauseGIFSArray") === null ||
      localStorage.getItem("pauseGIFSArray") === [] ||
      localStorage.getItem("pauseGIFSArray") === undefined
    ) {
      localStorage.setItem(
        "pauseGIFSArray",
        JSON.stringify([
          "https://media0.giphy.com/media/XPdR7H122vZ1C/giphy.gif?cid=790b7611f6dfedca30056047728a8ae9027975ad8723943a&rid=giphy.gif&ct=g",
        ])
      );
    }

    if (
      localStorage.getItem("sessionGIFSArray") === null ||
      localStorage.getItem("sessionGIFSArray") === [] ||
      localStorage.getItem("sessionGIFSArray") === undefined
    ) {
      localStorage.setItem(
        "sessionGIFSArray",
        JSON.stringify([
          "https://i.pinimg.com/originals/ab/e1/72/abe17294582423e00db65c85aba185d8.gif",
        ])
      );
    }
  }, []);

  const [pauseGIFSArray, setPauseGIFSArray] = useState(
    JSON.parse(localStorage.getItem("pauseGIFSArray")) || [
      "https://media0.giphy.com/media/XPdR7H122vZ1C/giphy.gif?cid=790b7611f6dfedca30056047728a8ae9027975ad8723943a&rid=giphy.gif&ct=g",
    ]
  );
  const [sessionGIFSArray, setSessionGIFSArray] = useState(
    JSON.parse(localStorage.getItem("sessionGIFSArray")) || [
      "https://i.pinimg.com/originals/ab/e1/72/abe17294582423e00db65c85aba185d8.gif",
    ]
  );

  const [currentSessionGIF, setCurrentSessionGIF] = useState(0);
  const [currentPauseGIF, setCurrentPauseGIF] = useState(0);

  useEffect(() => {
    function preventDefault(e) {
      if (
        e.target.className === "radius" ||
        e.target.className === "radiusCircle"
      ) {
        e.preventDefault();
      }
    }

    document.body.addEventListener("touchmove", preventDefault, {
      passive: false,
    });
  }, []);

  return (
    <div className="mainScreenContainer">
      <div className="mainComponents">
        <SessionPauseButton
          currentActivity={currentActivity}
          setCurrentActivity={setCurrentActivity}
        />

        {currentActivity === "session" ? (
          <Plant
            key={currentActivity}
            currentActivity={currentActivity}
            setCurrentActivity={setCurrentActivity}
            startStep={sessionStartStep}
            setStartStep={setSessionStartStep}
            currentSession={currentSession}
            setCurrentSession={setCurrentSession}
            numberOfSessions={numberOfSessions}
            GIFSArray={sessionGIFSArray}
            currentGIF={currentSessionGIF}
            autoSwitch={autoSwitch}
            setAutoSwitch={setAutoSwitch}
            timerActive={timerActive}
            setTimerActive={setTimerActive}
          />
        ) : (
          <Plant
            key={currentActivity}
            currentActivity={currentActivity}
            setCurrentActivity={setCurrentActivity}
            startStep={pauseStartStep}
            setStartStep={setPauseStartStep}
            currentSession={currentSession}
            setCurrentSession={setCurrentSession}
            numberOfSessions={numberOfSessions}
            GIFSArray={pauseGIFSArray}
            currentGIF={currentPauseGIF}
            autoSwitch={autoSwitch}
            setAutoSwitch={setAutoSwitch}
            timerActive={timerActive}
            setTimerActive={setTimerActive}
          />
        )}

        <StartStopButton
          timerActive={timerActive}
          setTimerActive={setTimerActive}
          setAutoSwitch={setAutoSwitch}
        />

        <ToggleViewButton />
      </div>
      <div className="secondaryComponents">
        <SessionSettings
          currentSession={currentSession}
          setCurrentSession={setCurrentSession}
          numberOfSessions={numberOfSessions}
          setNumberOfSessions={setNumberOfSessions}
          autoSwitch={autoSwitch}
          setAutoSwitch={setAutoSwitch}
          timerActive={timerActive}
          setTimerActive={setTimerActive}
        />
        {currentActivity === "session" ? (
          <GIFSettings
            key={currentActivity}
            currentActivity={currentActivity}
            GIFSArray={sessionGIFSArray}
            setGIFSArray={setSessionGIFSArray}
            currentGIF={currentSessionGIF}
            setCurrentGIF={setCurrentSessionGIF}
          />
        ) : (
          <GIFSettings
            key={currentActivity}
            currentActivity={currentActivity}
            GIFSArray={pauseGIFSArray}
            setGIFSArray={setPauseGIFSArray}
            currentGIF={currentPauseGIF}
            setCurrentGIF={setCurrentPauseGIF}
          />
        )}
      </div>
    </div>
  );
};

export default MainScreen;
