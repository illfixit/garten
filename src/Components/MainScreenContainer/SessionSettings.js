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
    props.setAutoSwitch(true);
  };

  const decreaseNumberOfCurrentSession = () => {
    if (props.currentSession > 1) {
      props.setCurrentSession(props.currentSession - 1);
      props.setAutoSwitch(true);
    }
  };

  const increaseNumberOfCurrentSession = () => {
    props.setCurrentSession(props.currentSession + 1);
    if (props.currentSession > props.numberOfSessions - 1) {
      props.setNumberOfSessions(props.numberOfSessions + 1);
    }
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
        <span className="sessionSettingsButtonsContainer">
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
        </span>
      </div>

      <div className="settings_options">
        <p>Number of current session</p>
        <span className="sessionSettingsButtonsContainer">
          <button
            id="minusCurrentSession"
            className="sessionSettingsButton"
            onClick={decreaseNumberOfCurrentSession}
          >
            -
          </button>
          <p id="numberOfSessions">{props.currentSession}</p>
          <button
            id="plusCurrentSession"
            className="sessionSettingsButton"
            onClick={increaseNumberOfCurrentSession}
          >
            +
          </button>
        </span>
      </div>
    </div>
  );
};

export default SessionSettings;
