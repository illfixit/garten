import React, { useEffect, useRef } from "react";
import Hammer from "rc-hammerjs";

// let lastStep = 0;

const Radius = (props) => {
  const step = useRef(props.startStep);
  const interval = 180 / 11.5;

  useEffect(() => {
    // console.log("toggle Timer: active: ", props.timerActive, step.current);
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

    element.parentElement.style.background = `conic-gradient(var(--mainColor) ${degree}deg, var(--secondaryColor) 0deg)`;
  };

  const handlePan = (event) => {
    if (
      event.target.className === "radius" ||
      event.target.className === "radiusCircle"
    ) {
      // console.log("handlePan");

      // window.scrollTo(0, 0);

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

      props.setStartStep(step.current);
    }
  };

  return (
    <Hammer onPan={handlePan}>
      <div className={`radius${props.timerActive ? " hidden" : ""}`}>
        <div
          className={`radiusCircle${props.timerActive ? " hidden" : ""}`}
        ></div>
      </div>
    </Hammer>
  );
};

export default Radius;
