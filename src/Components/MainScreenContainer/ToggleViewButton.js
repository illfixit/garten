import React, { useState } from "react";

const ToggleViewButton = (props) => {
  const [view, setView] = useState("compact");

  const toggleView = () => {
    if (view === "compact") {
      document.getElementsByClassName("toggleViewButton")[0].style.transform =
        "rotate(90deg) translateY(-0.6rem)";
      document.getElementsByClassName("mainComponents")[0].style.height =
        "100vh";
      setView("full");
    } else {
      document.getElementsByClassName("toggleViewButton")[0].style.transform =
        "rotate(270deg) translateY(0rem)";
      document.getElementsByClassName("mainComponents")[0].style.height =
        "auto";
      setView("compact");
    }
  };

  return (
    <span className="toggleViewButton" onClick={toggleView}>
      <p>&#8249;</p>
    </span>
  );
};

export default ToggleViewButton;
