import React from "react";

function Card(props) {
  console.log(props)
  return (
    <div className="card col-2">
      {/* <div className="img-container"> */}
       <img src={props.url} alt="pokemon"/>
       <h3>{props.name}</h3>
      {/* </div> */}
    </div>
  );
}

export default Card;