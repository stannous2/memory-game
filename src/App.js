import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import AnimalCard from "./components/AnimalCard";
import animals from "./animals.json";

class App extends Component {
  // Setting this.state.animals to the animals json array
  state = {
    animals
  };

  clickAnimal = id => {
    // Filter this.state.animals for animals with an id not equal to the id being removed
    const animals = this.state.animals.filter(animal => animal.id !== id);
    // Set this.state.animals equal to the new animals array
    this.setState({ animals });
    console.log('id --- ' + id)
    alert("this id is clicked... " + id )
  };

  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar/>
      <Title />
      <Wrapper>
        {this.state.animals.map(animals => (
          <AnimalCard
            clickAnimal={this.clickAnimal}
            id={animals.id}
            key={animals.id}
            image={animals.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}


export default App;
