import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import images from "./images.json";

function App() {
  return (
    <Router>
        <Nav />
        <Jumbotron />
        <Card 
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
        />
    </Router>
  );
}

export default App;
