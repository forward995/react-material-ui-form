import React from "react";
import ReactDOM from "react-dom";
import NewSletter from "./newsletter";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <NewSletter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
