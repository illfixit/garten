import React from "react";

const SessionControl = ({ currentActivity, setCurrentActivity }) => {
  const changeActivity = (e) => {
    // console.log(e.target.id);
    if (e.target.id === "pause") {
      document
        .getElementById("session")
        .classList.remove("sessionControlActive");
      document.getElementById("pause").classList.add("sessionControlActive");

      setCurrentActivity("pause");
    } else if (e.target.id === "session") {
      document.getElementById("pause").classList.remove("sessionControlActive");
      document.getElementById("session").classList.add("sessionControlActive");

      setCurrentActivity("session");
    }
  };

  return (
    <div className="sessionControlContainer" onClick={changeActivity}>
      <p
        id="session"
        className={`sessionControlButtons ${
          currentActivity === "session" ? "sessionControlActive" : ""
        }`}
      >
        Session
      </p>
      <p
        id="pause"
        className={`sessionControlButtons ${
          currentActivity === "pause" ? "sessionControlActive" : ""
        }`}
      >
        &nbsp;Pause&nbsp;
      </p>
    </div>
  );
};

export default SessionControl;
