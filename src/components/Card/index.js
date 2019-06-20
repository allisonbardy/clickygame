import React from "react";
import "./index.css"

function Card(props) {
  console.log(props)
  return (
    <div className="grid-container">

<div class="grid-item"><img src={props.url} alt="pokemon"/>
       {/* <h3>{props.name}</h3> */}
       </div>
    </div>
  );
}

export default Card;