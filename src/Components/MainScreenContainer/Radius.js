import React, { useEffect, useRef } from "react";
import Hammer from "rc-hammerjs";

// let lastStep = 0;

const Radius = (props) => {
  // useEffect(() => {
  //   return document.querySelector(".plantContainer").addEventListener(
  //     "touchmove",
  //     (e) => {
  //       e.preventDefault();
  //     },
  //     { passive: false }
  //   );
  // });

  const step = useRef(0);
  const interval = 180 / 11;

  useEffect(() => {
    console.log("toggle Timer: active: ", props.timerActive, step.current);
    rotateCircle(document.querySelector(".radius"), step.current * interval);
  }, [props.timerActive]);

  const rotateCircle = (element, degree) => {
    let transformString = `rotate(${degree}deg) scale(1) skewX(0deg) skewY(0deg)`;

    // now attach that variable to each prefixed style
    element.style.webkitTransform = transformString;
    element.style.MozTransform = transformString;
    element.style.msTransform = transformString;
    element.style.OTransform = transformString;
    element.style.transform = transformString;

    element.parentElement.style.background = `conic-gradient(mediumslateblue ${degree}deg, rosybrown 0deg)`;
  };

  const handlePan = (event) => {
    if (
      event.target.className === "radius" ||
      event.target.className === "radiusCircle"
    ) {
      // console.log("handlePan");

      let rect;
      if (event.target.className === "radius")
        rect = event.target.parentElement.getBoundingClientRect();
      if (event.target.className === "radiusCircle")
        rect = event.target.parentElement.parentElement.getBoundingClientRect();

      let x = (event.center.x - rect.x) / rect.width - 0.5; //x position within the element.
      let y = 0.5 - (event.center.y - rect.y) / rect.height; //y position within the element.

      let atan = (Math.atan2(y, x) * 180) / 3.1415;
      if (atan < -180) atan = -180;
      if (atan > 180) atan = 180;

      let degree = 0;

      if (atan <= 90 && atan >= -180) degree = -atan + 90;
      if (atan > 90 && atan <= 180) degree = -atan + 450;
      if (degree > 0 && degree < 10) degree = 0;

      let integer = Math.floor(degree / interval);
      let decimal = degree - integer;

      let newStep = decimal >= 0.5 ? integer + 1 : integer;
      step.current =
        Math.abs(step.current - newStep) > 3 ? step.current : newStep;

      rotateCircle(document.querySelector(".radius"), step.current * interval);

      props.setTimeStep(step.current);
    }
  };

  // const hammerOptions = {
  //   touchAction: "compute",
  //   recognizers: {
  //     tap: {
  //       time: 1,
  //       threshold: 1,
  //     },
  //     press: {
  //       //   // time: 3000
  //       threshold: 1,
  //     },
  //     pan: {
  //       threshold: 100,
  //       // direction: "DIRECTION_ALL",
  //     },
  //   },
  // };

  return (
    <Hammer
      onPan={handlePan}
      // options={hammerOptions}
      // direction="DIRECTION_ALL"
    >
      <div className={`radius${props.timerActive ? " hidden" : ""}`}>
        <div
          className={`radiusCircle${props.timerActive ? " hidden" : ""}`}
        ></div>
      </div>
    </Hammer>
  );
};

export default Radius;
