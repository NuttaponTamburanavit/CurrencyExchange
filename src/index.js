import React from "react";
import ReactDOM from "react-dom";
import Currency from "./pages/currency";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Currency />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
