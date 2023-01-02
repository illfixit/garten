import React, { useEffect } from "react";
import Radius from "./Radius";
import Timer from "./Timer";

const Plant = (props) => {
  // if (document.querySelector("plantContainer")) {
  //   let plantContainer = document
  //     .querySelector("plantContainer")
  //     .getBoundingClientRect();
  //   console.log(plantContainer);
  // }

  let plantContainerBoundaries = null;

  useEffect(() => {
    if (document.querySelector(".plantContainer")) {
      plantContainerBoundaries = document
        .querySelector(".plantContainer")
        .getBoundingClientRect();
      // console.log(plantContainerBoundaries);
    }
  }, []);

  return (
    <div className={`plantContainer ${props.timerActive ? "noRadius" : ""}`}>
      <Radius
        plantContainerBoundaries={plantContainerBoundaries}
        setTimeStep={props.setTimeStep}
        timerActive={props.timerActive}
      />

      <div className="plant">
        {/* <img
          className="plantImage"
          src="./static/images/flowers/orchid.png"
        ></img> */}

        <Timer
          timeStep={props.timeStep}
          setTimeStep={props.setTimeStep}
          timerActive={props.timerActive}
          setTimerActive={props.setTimerActive}
        />
      </div>
    </div>
  );
};

export default Plant;
