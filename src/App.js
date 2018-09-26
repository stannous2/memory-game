import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import AnimalCard from "./components/AnimalCard";
import animals from "./animals.json";

class App extends Component {
  // Setting this.state.animals to the animals json array
    state = {
      animals,
      firstGuess: false,
      secondGuess: false,
      score: 0,
      topscore: 0,
      clickedCards: []
    }
  
  shuffleCards = () => {
    for(let i = animals.length -1; i >= 0; i--){
      //remove an item at randomized index
      let splicedArray = (animals.splice(Math.floor(Math.random() * animals.length), 1));
      // console.log('splicedArray', splicedArray[0]);
      animals.push(splicedArray[0])
    }
    console.log('randomized array... ', animals);
  }

  clickAnimal = id => {
    this.shuffleCards();
    let score = this.state.score;
    let topscore = this.state.topscore;
    
    if(!this.state.clickedCards.includes(id)){
      this.state.clickedCards.push(id);
      score++;
      topscore++
      this.setState({ score, topscore })
    }else {
      this.setState({ score: 0 })
      alert('card has been clicked...')
    }
    
  };
  
  // Map over this.state.animals and render AnimalCard component for each animal object
  render() {
    return (
      <div>
      <Navbar score={this.state.score} topscore={this.state.topscore}/>
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
