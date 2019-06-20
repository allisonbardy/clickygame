import React from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import images from "./images.json";


function App() {
  return (
    <div>
        <Nav />
        <Jumbotron />
        {images.map(imageObject => <Card key={imageObject.id} url={imageObject.image} />)}
        </div>

  );
}

export default App;
