import React from "react";

const GIFSettings = (props) => {
  console.log(props);

  const addGIF = (e) => {
    // console.log(e)

    let gifUrl = document.getElementById("url_input").value;
    let tempArr = [...props.GIFSArray, gifUrl];
    if (gifUrl.trim()) props.setGIFSArray(tempArr);
    localStorage.setItem(
      `${props.currentActivity}GIFSArray`,
      JSON.stringify(tempArr)
    );
    document.getElementById("url_input").value = "";
    // console.log(props.GIFSArray);
  };

  const useGIF = (e) => {
    let gifId = e.target.parentElement.parentElement.firstChild.innerText - 1;
    // console.log(gifId, props.GIFSArray.length);
    if (gifId >= 0 && gifId <= props.GIFSArray.length) {
      props.setCurrentGIF(gifId);
      //   console.log(`url(${props.GIFSArray[gifId - 1]})`);
      if (document.getElementById(`${props.currentActivity}Background`)) {
        document.getElementById(
          `${props.currentActivity}Background`
        ).style.backgroundImage = `url(${props.GIFSArray[gifId]})`;
      }
    }
  };

  const deleteGIF = (e) => {
    let gifId = e.target.parentElement.parentElement.firstChild.innerText - 1;
    console.log(gifId, props.currentGIF);
    if (
      gifId >= 0 &&
      gifId <= props.GIFSArray.length &&
      gifId !== props.currentGIF
    ) {
      let tempArr = props.GIFSArray.filter((g, idx) => idx !== gifId);
      props.setGIFSArray(tempArr);
      localStorage.setItem(
        `${props.currentActivity}GIFSArray`,
        JSON.stringify(tempArr)
      );
      if (gifId < props.currentGIF) props.setCurrentGIF(props.currentGIF - 1);
    }
  };

  return props.currentActivity ? (
    <div className="settingsContainer">
      {props.GIFSArray.map((g, idx) => (
        <div
          className="settings_options"
          key={`${g.slice(0, 5) + g.slice(-5)}`}
        >
          <p>{idx + 1}</p>
          <img className="gif_preview" alt="gif_preview" src={g} />
          <div className="settings_button_container">
            <button className="settings_button" onClick={useGIF}>
              Use
            </button>
            <button
              className="settings_button delete_button"
              onClick={deleteGIF}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="input_container settings_options">
        <input
          id="url_input"
          className="background_input"
          placeholder="Paste GIF's URL here"
        ></input>
        <button className="settings_button" onClick={addGIF}>
          Add
        </button>
      </div>
    </div>
  ) : null;
};

export default GIFSettings;
