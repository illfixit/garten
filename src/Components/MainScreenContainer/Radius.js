import React, { useRef } from "react";
import Hammer from "rc-hammerjs";

// let lastStep = 0;

const Radius = (props) => {
  const lastStep = useRef(0);

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
    if (event.target.className === "radius") {
      let rect = event.target.parentElement.getBoundingClientRect();

      let x = (event.center.x - rect.x) / rect.width; //x position within the element.
      let y = (event.center.y - rect.y) / rect.height; //y position within the element.

      let degree;
      if (x > 0.5 || lastStep.current < 11) {
        degree = Math.floor(y * 180);
      } else {
        degree = Math.floor(180 + (1 - y) * 180);
      }

      const interval = 180 / 11;
      let integer = Math.floor(degree / interval);
      let decimal = degree - integer;
      let step = decimal >= 0.45 ? integer + 1 : integer;

      // console.log(integer, lastStep.current, step);

      if (Math.abs(step - lastStep.current) > 5) step = lastStep.current;
      lastStep.current = step;

      if (step <= 0) step = 0;
      if (step >= 22) step = 22;

      rotateCircle(document.querySelector(".radius"), step * interval);
      props.setTimeStep(step);
    }
  };

  const hammerOptions = {
    touchAction: "compute",
    recognizers: {
      // tap: {
      //     // time: 200,
      //     threshold: 10
      //     }
      press: {
        // time: 3000
        threshold: 1,
        // threshold: 3
      },
    },
  };

  return (
    <Hammer
      onPan={handlePan}
      // onPanStart={handlePanStart}
      // onPanEnd={handlePanEnd}
      // onPanCancel={handlePanCancel}
      options={hammerOptions}
      direction="DIRECTION_ALL"
    >
      <div className="radius">
        <div className="radiusCircle"></div>
      </div>
    </Hammer>
  );
};

export default Radius;
