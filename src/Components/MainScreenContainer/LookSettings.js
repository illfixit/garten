import React, { useState } from "react";
import { hslToHex, getColor, setColor } from "./utils";

const defBGColor = getColor("backgroundColor");
const defBGColorArr = defBGColor
  .split("(")[1]
  .split(")")[0]
  .split(",")
  .map((el) => parseFloat(el));

const [bgh, bgs, bgl] = defBGColorArr;

const defMainColor = getColor("mainColor");
const defMainColorArr = defMainColor
  .split("(")[1]
  .split(")")[0]
  .split(",")
  .map((el) => el.trim());

const LookSettings = (props) => {
  const [mainColorInputValue, setMainColorInputValue] = useState(defMainColor);
  const [bghValue, setBghValue] = useState(bgh);
  const [bgsValue, setBgsValue] = useState(bgs);
  const [bglValue, setBglValue] = useState(bgl);

  // const [mainColorFull, setMainColorFull] = useState(false);
  // const [BgColorFull, setBgColorFull] = useState(false);

  // const toggleBgColorView = (e) => {
  //   setBgColorFull(!BgColorFull);
  // };

  const changeMainColor = (e) => {
    setMainColorInputValue(e.target.value);
    setColor("mainColor", "h", e.target.value);
  };

  //   const changeBGColor = (e) => {
  //     setBgColorInputValue({e.target.value});
  //     setColor("backgroundColor", "h", e.target.value);
  //   };

  const resetMainColor = (e) => {
    setMainColorInputValue(defMainColorArr[0]);
    setColor("mainColor", "h", defMainColorArr[0]);
    document.getElementById("mainColor").value = defMainColorArr[0];
  };

  const resetBGColor = (e) => {
    setBghValue(bgh);
    setBgsValue(bgs);
    setBglValue(bgl);

    setColor("backgroundColor", "h", bgh);
    setColor("backgroundColor", "s", bgs + "%");
    setColor("backgroundColor", "l", bgl + "%");

    document.getElementById("backgroundColor-h").value = bgh;
    if (document.getElementById("backgroundColor-s")) {
      document.getElementById("backgroundColor-s").value = bgs;
    }
    if (document.getElementById("backgroundColor-l")) {
      document.getElementById("backgroundColor-l").value = bgl;
    }
  };

  const changeColor = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    if (id === "backgroundColor-h") {
      setBghValue(value);
      setColor(id.split("-")[0], "h", value);
    }

    if (id === "backgroundColor-s") {
      setBgsValue(value);

      setColor(id.split("-")[0], "s", value + "%");
    }

    if (id === "backgroundColor-l") {
      setBglValue(value);

      setColor(id.split("-")[0], "l", value + "%");
    }
  };

  return (
    <div className="sessionSettings">
      <div className="settings_options look_options">
        {/* Main color */}
        <p>Main color:</p>
        <input
          id="mainColor"
          type="range"
          max="360"
          defaultValue={mainColorInputValue}
          onChange={changeMainColor}
        ></input>
        <p id="resetMainColor" className="resetButton" onClick={resetMainColor}>
          &#8634;
        </p>
      </div>
      {/* BG color */}

      <div className="settings_options">
        <div className="look_options_container">
          <div className=" look_options">
            <p>Background color: {hslToHex(bghValue, bgsValue, bglValue)}</p>

            <p id="resetBGColor" className="resetButton" onClick={resetBGColor}>
              &#8634;
            </p>
          </div>
          <br />

          <div className=" look_options">
            <p>Hue</p>
            <input
              id="backgroundColor-h"
              type="range"
              max="360"
              defaultValue={bghValue}
              onChange={changeColor}
            ></input>
          </div>
          <br />

          <div className=" look_options">
            <p>Saturation</p>
            <input
              id="backgroundColor-s"
              type="range"
              max="100"
              defaultValue={bgsValue}
              onChange={changeColor}
            ></input>
          </div>

          <br />
          <div className=" look_options">
            <p>Lightness</p>
            <input
              id="backgroundColor-l"
              type="range"
              max="100"
              defaultValue={bglValue}
              onChange={changeColor}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookSettings;
