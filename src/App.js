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
        {images.map(imageObject => <Card key={imageObject.id} url={imageObject.image} name="allison"/>)}
        {/* <Card 
          image={images[0].image}
        />
        <Card
          image={images[1].image}
        />
        <Card
          image={images[2].image}
        />
        <Card
          image={images[3].image}
        />
        <Card
          image={images[4].image}
        />
        <Card
          image={images[5].image}
        />
        <Card
          image={images[6].image}
        />
        <Card
          image={images[7].image}
        />
        <Card
          image={images[8].image}
        />
        <Card
          image={images[9].image}
        />
        <Card
          image={images[10].image}
        />
        <Card
          image={images[11].image}
        /> */}
        </div>

  );
}

export default App;
