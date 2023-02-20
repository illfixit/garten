import React, { useEffect, useState } from "react";

const FontSettings = (props) => {
  let [fontsArray, setFontsArray] = useState(["Norican", "Karla", "Open Sans"]);

  useEffect(() => {
    // console.log(fontsArray);
    if (fontsArray.length > 0) {
      fontsArray.forEach((font) => addFont(font));
    }
  }, []);

  const addFont = (font) => {
    let fontName;
    if (!font || typeof font != "string") {
      fontName = document.getElementById("font_url_input").value;
    } else {
      fontName = font;
    }
    // console.log(fontName);
    if (typeof fontName === "string") {
      fontName = fontName.trim();
      let fontFamily = fontName;

      if (fontName.split(" ").length > 0) {
        fontFamily = fontName.split(" ").join("+");
      }

      //   console.log(fontFamily);

      let link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute(
        "href",
        `https://fonts.googleapis.com/css?family=${fontFamily}`
      );
      document.head.appendChild(link);
      if (!fontName in fontsArray) {
        setFontsArray([...fontsArray, fontName]);
      }
    }
  };

  const useFont = (event) => {
    let font = event.target.id.split("-")[1];
    // console.log(font);
    document.querySelector(":root").style.setProperty("--font", font);
  };

  const deleteFont = () => {};

  // {getComputedStyle(document.documentElement).getPropertyValue("--font")}
  //   console.log(fontsArray);

  return (
    <div className="sessionSettings">
      {fontsArray.map((font) => {
        // console.log(font);
        return (
          <div key={font} className="settings_options font_settings">
            {font}
            <div className="font_preview_container">
              <p className="font_preview" style={{ fontFamily: font }}>
                25:50
              </p>
              <div className="settings_button_container">
                <button
                  id={`font-${font}`}
                  className="settings_button"
                  onClick={useFont}
                >
                  Use
                </button>
                <button
                  className="settings_button delete_button"
                  onClick={deleteFont}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="input_container settings_options">
        <input
          id="font_url_input"
          className="background_input"
          placeholder="Google Font's name (Robot, Lora etc.)"
        ></input>
        <button className="settings_button" onClick={addFont}>
          Add
        </button>
      </div>
    </div>
  );
};

export default FontSettings;
