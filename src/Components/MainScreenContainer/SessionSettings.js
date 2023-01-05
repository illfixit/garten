import React from "react";

const SessionSettings = (props) => {
  const decreaseNumberOfSessions = () => {
    if (
      props.numberOfSessions > 1 &&
      props.numberOfSessions > props.currentSession
    )
      props.setNumberOfSessions(props.numberOfSessions - 1);
  };

  const increaseNumberOfSessions = () => {
    props.setNumberOfSessions(props.numberOfSessions + 1);
  };

  return (
    <div classname="sessionSettings">
      <div className="settings_options">
        <p>How many sessions today?</p>
        <button
          id="lessSessions"
          className="sessionSettingsButton"
          onClick={decreaseNumberOfSessions}
        >
          -
        </button>
        <p id="numberOfSessions">{props.numberOfSessions}</p>
        <button
          id="moreSessions"
          className="sessionSettingsButton"
          onClick={increaseNumberOfSessions}
        >
          +
        </button>
      </div>
      {/* <div className="settings_options">
        <p>Auto start next session/pause?</p>
        <button className="sessionSettingsButton">Yes</button>
        <button className="sessionSettingsButton noButton">No</button>
      </div> */}
    </div>
  );
};

export default SessionSettings;
