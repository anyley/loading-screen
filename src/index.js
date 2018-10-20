import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  return (
    <div className="loader">
      <div>
        <div className="loading-label">Loading...</div>
        <div className="spinner" />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
