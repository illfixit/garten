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
    <div className="sessionSettings">
      <div className="settings_options">
        <p>Auto start next session/pause?</p>
        <div className="autoStartButtonsContainer">
          <button
            className={`autoStartButtons ${
              props.autoSwitch ? "autoStartButtonsActive" : ""
            }`}
            onClick={() => props.setAutoSwitch(true)}
          >
            Yes
          </button>
          <button
            className={`autoStartButtons ${
              props.autoSwitch ? "" : "autoStartButtonsActive"
            }`}
            onClick={() => props.setAutoSwitch(false)}
          >
            No
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default SessionSettings;
