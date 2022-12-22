import React, { useState } from "react";
import Plant from "./Plant";
import Timer from "./Timer";

const MainScreen = (props) => {
  const [timeStep, setTimeStep] = useState(0);

  return (
    <div className="mainScreenContainer">
      {/* <FocusText /> */}
      <div>
        You have focused <br /> for 6 hours 35 mins today.{" "}
      </div>
      <Plant setTimeStep={setTimeStep} />
      <div>+ Work</div>
      {/* <FocusTag /> */}
      <Timer timeStep={timeStep} />
      {/* <Buttons /> */}
      <button className="mainScreenButtons">Plant</button>
    </div>
  );
};

export default MainScreen;
