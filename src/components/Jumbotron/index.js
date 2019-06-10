import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 50, textAlign: "center", fontSize: 30, background: "#FFE4B5" }}
      className="jumbotron"
    >
      Clicky Game!<br></br><br></br>
      Click on an image to earn points, but make sure you click each one once!
    </div>
  );
}

export default Jumbotron;
