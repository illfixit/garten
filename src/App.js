import logo from "./logo.svg";
import React from "react";

import Header from "./Components/HeaderContainer/Header";
import MainScreen from "./Components/MainScreenContainer/MainScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
    </div>
  );
}

export default App;
