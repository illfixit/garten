import React, { useEffect, useState } from "react";

import SessionPlant from "./SessionPlant";
import PausePlant from "./PausePlant";

import SessionControl from "./SessionControl";

const MainScreen = (props) => {
  const [currentActivity, setCurrentActivity] = useState("pause");
  const [pauseStartStep, setPauseStartStep] = useState(1);
  const [sessionStartStep, setSessionStartStep] = useState(9);
  const [numberOfSessions, setNumberOfSessions] = useState(2);
  const [currentSession, setCurrentSession] = useState(1);

  const [pauseGIFSArray, setPauseGIFSArray] = useState([
    "https://media0.giphy.com/media/XPdR7H122vZ1C/giphy.gif?cid=790b7611f6dfedca30056047728a8ae9027975ad8723943a&rid=giphy.gif&ct=g",
  ]);
  const [sessionGIFSArray, setSessionGIFSArray] = useState([
    "https://i.pinimg.com/originals/ab/e1/72/abe17294582423e00db65c85aba185d8.gif",
  ]);

  const [currentSessionGIF, setCurrentSessionGIF] = useState(0);
  const [currentPauseGIF, setCurrentPauseGIF] = useState(0);

  // useEffect(() => {
  //   if (
  //     document.getElementById("pauseBackground") &&
  //     document.getElementById("sessionBackground")
  //   ) {
  //     document.getElementById("pauseBackground").style.backgroundImage =
  //       pauseGIFSArray[currentPauseGIF];
  //     document.getElementById("sessionBackground").style.backgroundImage =
  //       sessionGIFSArray[currentSessionGIF];
  //   }
  // });

  // const handleRangeInput = (e) => {
  //   // console.log("e", e.target.value);
  //   document.querySelector(
  //     ".timerBackground"
  //   ).style.backgroundPosition = `${100 - e.target.value}%`;
  // };

  return (
    <div className="mainScreenContainer">
      <SessionControl
        currentActivity={currentActivity}
        setCurrentActivity={setCurrentActivity}
      />

      {currentActivity === "session" ? (
        <SessionPlant
          currentActivity={currentActivity}
          setCurrentActivity={setCurrentActivity}
          sessionStartStep={sessionStartStep}
          setSessionStartStep={setSessionStartStep}
          GIFSArray={sessionGIFSArray}
          setGIFSArray={setSessionGIFSArray}
          currentGIF={currentSessionGIF}
          setCurrentGIF={setCurrentSessionGIF}
          numberOfSessions={numberOfSessions}
          setNumberOfSessions={setNumberOfSessions}
          currentSession={currentSession}
          setCurrentSession={setCurrentSession}
        />
      ) : (
        <PausePlant
          currentActivity={currentActivity}
          setCurrentActivity={setCurrentActivity}
          pauseStartStep={pauseStartStep}
          setPauseStartStep={setPauseStartStep}
          GIFSArray={pauseGIFSArray}
          setGIFSArray={setPauseGIFSArray}
          currentGIF={currentPauseGIF}
          setCurrentGIF={setCurrentPauseGIF}
          numberOfSessions={numberOfSessions}
          setNumberOfSessions={setNumberOfSessions}
          currentSession={currentSession}
          setCurrentSession={setCurrentSession}
        />
      )}

      {/* <input
        type="range"
        id="bg_position"
        name="bg_position"
        min="0"
        max="100"
        // value="50"
        onChange={handleRangeInput}
      ></input>
      <input id="bg_url" placeholder="Paste link to your GIF here"></input> */}
    </div>
  );
};

export default MainScreen;
