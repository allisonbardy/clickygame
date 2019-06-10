import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand col-md-4" href="/">
        Clicky Game!
      </a>
      <a className="navbar-brand col-md-4">
        Click an image to begin
      </a>
      <a className="navbar-brand col-md-4">
        Score: 0 | Top Score: 0
      </a>
    </nav>
  );
}

export default Nav;
