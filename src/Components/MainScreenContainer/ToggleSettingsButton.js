import React, { useState } from "react";

const ToggleSettingsButton = (props) => {
  const [settingsVisible, setSettingsVisible] = useState(false);

  const toggleSettings = () => {
    if (!settingsVisible) {
      document.getElementsByClassName("secondaryComponents")[0].style.display = "flex";
      setSettingsVisible(true);
    } else {
      document.getElementsByClassName("secondaryComponents")[0].style.display = "none";
      setSettingsVisible(false);
    }
  };

  return (
    <span className="toggleSettingsButton" onClick={toggleSettings}>
      <p>⚙</p>
    </span>
  );
};

export default ToggleSettingsButton;