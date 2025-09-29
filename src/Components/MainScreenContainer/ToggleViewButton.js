import React, { useState } from "react";

const ToggleViewButton = (props) => {
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const toggleView = () => {
    const sessionControlContainer = document.getElementsByClassName("sessionControlContainer")[0];
    const mainScreenButtons = document.getElementsByClassName("mainScreenButtons");

    if (buttonsVisible) {
      // Hide the buttons but keep layout
      if (sessionControlContainer) {
        sessionControlContainer.style.visibility = "hidden";
      }
      for (let i = 0; i < mainScreenButtons.length; i++) {
        mainScreenButtons[i].style.visibility = "hidden";
      }
      setButtonsVisible(false);
    } else {
      // Show the buttons
      if (sessionControlContainer) {
        sessionControlContainer.style.visibility = "visible";
      }
      for (let i = 0; i < mainScreenButtons.length; i++) {
        mainScreenButtons[i].style.visibility = "visible";
      }
      setButtonsVisible(true);
    }
  };

  return (
    <span className="toggleViewButton" onClick={toggleView}>
      {buttonsVisible ? (
        // Expand - corners pointing outward (expand to fullscreen)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7V3H7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
          <path d="M17 21H21V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
        </svg>
      ) : (
        // Contract - corners pointing inward (exit fullscreen)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 4L9 9L4 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
          <path d="M15 20L15 15L20 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
        </svg>
      )}
    </span>
  );
};

export default ToggleViewButton;
