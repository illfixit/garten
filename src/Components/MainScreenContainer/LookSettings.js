import React, { useState } from "react";
import { hslToHex, getColor, setColor } from "./utils";

const defBGColor = getColor("backgroundColor");
const defBGColorArr = defBGColor
  .split("(")[1]
  .split(")")[0]
  .split(",")
  .map((el) => parseFloat(el));

let [bgh, bgs, bgl] = defBGColorArr;
bgs = `${bgs}%`;
bgl = `${bgl}%`;

const defMainColor = getColor("mainColor");
const defMainColorArr = defMainColor
  .split("(")[1]
  .split(")")[0]
  .split(",")
  .map((el) => el.trim());

const LookSettings = (props) => {
  const [mainColorInputValue, setMainColorInputValue] = useState(
    (localStorage.getItem("mch") &&
      localStorage
        .getItem("mch")
        .substring(1, localStorage.getItem("mch").length - 1)) ||
      defMainColorArr[0]
  );

  document.documentElement.style.setProperty(
    "--mainColor-h",
    mainColorInputValue
  );

  const [bghValue, setBghValue] = useState(
    JSON.parse(localStorage.getItem("bgh")) || bgh
  );
  const [bgsValue, setBgsValue] = useState(
    JSON.parse(localStorage.getItem("bgs")) || bgs
  );
  const [bglValue, setBglValue] = useState(
    JSON.parse(localStorage.getItem("bgl")) || bgl
  );

  document.documentElement.style.setProperty("--backgroundColor-h", bghValue);

  document.documentElement.style.setProperty("--backgroundColor-s", bgsValue);

  document.documentElement.style.setProperty("--backgroundColor-l", bglValue);

  localStorage.setItem("bgh", JSON.stringify(bghValue));
  localStorage.setItem("bgs", JSON.stringify(bgsValue));
  localStorage.setItem("bgl", JSON.stringify(bglValue));

  // const [mainColorFull, setMainColorFull] = useState(false);
  // const [BgColorFull, setBgColorFull] = useState(false);

  // const toggleBgColorView = (e) => {
  //   setBgColorFull(!BgColorFull);
  // };

  const changeMainColor = (e) => {
    setMainColorInputValue(e.target.value);
    setColor("mainColor", "h", e.target.value);

    localStorage.setItem("mch", JSON.stringify(e.target.value));
  };

  //   const changeBGColor = (e) => {
  //     setBgColorInputValue({e.target.value});
  //     setColor("backgroundColor", "h", e.target.value);
  //   };

  const resetMainColor = (e) => {
    setMainColorInputValue(defMainColorArr[0]);
    setColor("mainColor", "h", defMainColorArr[0]);
    document.getElementById("mainColor").value = defMainColorArr[0];

    localStorage.setItem("mch", JSON.stringify(defMainColorArr[0]));
  };

  const resetBGColor = (e) => {
    setBghValue(bgh);
    setBgsValue(bgs);
    setBglValue(bgl);

    setColor("backgroundColor", "h", bgh);
    setColor("backgroundColor", "s", bgs);
    setColor("backgroundColor", "l", bgl);

    console.log(bgh, bgs, bgl);

    localStorage.setItem("bgh", JSON.stringify(bgh));
    localStorage.setItem("bgs", JSON.stringify(bgs));
    localStorage.setItem("bgl", JSON.stringify(bgl));

    document.getElementById("backgroundColor-h").value = bgh;
    // if (document.getElementById("backgroundColor-s")) {
    document.getElementById("backgroundColor-s").value = parseInt(bgs);
    // }
    // if (document.getElementById("backgroundColor-l")) {
    document.getElementById("backgroundColor-l").value = parseInt(bgl);
    // }
  };

  const changeColor = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    if (id === "backgroundColor-h") {
      setBghValue(value);
      setColor(id.split("-")[0], "h", value);
      localStorage.setItem("bgh", JSON.stringify(value));
    }

    if (id === "backgroundColor-s") {
      setBgsValue(value + "%");

      setColor(id.split("-")[0], "s", `${value}%`);
      localStorage.setItem("bgs", JSON.stringify(`${value}%`));
    }

    if (id === "backgroundColor-l") {
      setBglValue(value + "%");

      setColor(id.split("-")[0], "l", `${value}%`);
      // document.getElementById("backgroundColor-l").value = bglValue;
      localStorage.setItem("bgl", JSON.stringify(`${value}%`));
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
              defaultValue={parseFloat(bgsValue)}
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
              defaultValue={parseFloat(bglValue)}
              onChange={changeColor}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookSettings;
