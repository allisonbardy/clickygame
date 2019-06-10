import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        {props.children}
      </div>
    </div>
  );
}

export default Card;