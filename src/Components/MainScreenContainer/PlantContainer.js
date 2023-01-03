import React from "react";
import SessionPlant from "./SessionPlant";
import PausePlant from "./PausePlant";

const PlantContainer = (props) => {
  console.log(props);
  return (
    <>
      {props.currentActivity === "session" ? (
        <SessionPlant {...props} />
      ) : (
        <PausePlant {...props} />
      )}
    </>
  );
};

export default PlantContainer;
