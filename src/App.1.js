import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import AnimalCard from "./components/AnimalCard";
import animals from "./animals.json";

const App = () => (
  <div>
  <Navbar/>
  <Title />
  <Wrapper>
    <AnimalCard
      name={animals[0].name}
      image={animals[0].image}
    />
    <AnimalCard
      name={animals[1].name}
      image={animals[1].image}
    />
    <AnimalCard
      name={animals[2].name}
      image={animals[2].image}
    />
    <AnimalCard
      image={animals[3].image}
    />
    <AnimalCard
      image={animals[4].image}
    />
    <AnimalCard
      image={animals[5].image}
    />
    <AnimalCard
      image={animals[6].image}
    />
    <AnimalCard
      image={animals[7].image}
    />
    <AnimalCard
      image={animals[8].image}
    />
    <AnimalCard
      image={animals[9].image}
    />
    <AnimalCard
      image={animals[10].image}
    />
    <AnimalCard
      image={animals[11].image}
    />
  </Wrapper>
  </div>
);

export default App;
