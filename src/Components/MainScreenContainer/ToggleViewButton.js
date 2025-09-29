import React, { useState } from "react";

const ToggleViewButton = (props) => {
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const toggleView = () => {
    const sessionControlContainer = document.getElementsByClassName("sessionControlContainer")[0];
    const mainScreenButtons = document.getElementsByClassName("mainScreenButtons");
    
    if (buttonsVisible) {
      // Hide the buttons
      if (sessionControlContainer) {
        sessionControlContainer.style.display = "none";
      }
      for (let i = 0; i < mainScreenButtons.length; i++) {
        mainScreenButtons[i].style.display = "none";
      }
      document.getElementsByClassName("toggleViewButton")[0].style.transform =
        "rotate(90deg) translateY(-0.3rem)";
      document.getElementsByClassName(
        "toggleViewButton"
      )[0].style.webkitTransform = "rotate(90deg) translateY(-0.3rem)";
      setButtonsVisible(false);
    } else {
      // Show the buttons
      if (sessionControlContainer) {
        sessionControlContainer.style.display = "flex";
      }
      for (let i = 0; i < mainScreenButtons.length; i++) {
        mainScreenButtons[i].style.display = "block";
      }
      document.getElementsByClassName("toggleViewButton")[0].style.transform =
        "rotate(270deg) translateY(-0.38rem)";
      document.getElementsByClassName(
        "toggleViewButton"
      )[0].style.webkitTransform = "rotate(270deg) translateY(-0.38rem)";
      setButtonsVisible(true);
    }
  };

  return (
    <span className="toggleViewButton" onClick={toggleView}>
      <p>&#8249;</p>
    </span>
  );
};

export default ToggleViewButton;
