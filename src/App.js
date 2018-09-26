import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import AnimalCard from "./components/AnimalCard";
import animals from "./animals.json";

class App extends Component {
  // Setting this.state.animals to the animals json array
  // constructor(props) {
    // super(props)
    state = {
      animals,
      firstGuess: false,
      secondGuess: false,
      score: 0
    }
  // }

  shuffle = () => {
    debugger
    console.log(animals);
    
    let animalsArray = animals;
    console.log(animalsArray);
    
    let temp = [];
    for (let i = 0; i < animals.length - 1 ; i++) {
      
      let rng = Math.floor(Math.random() * 2)
      if (rng === 0) {
        temp.push(animalsArray.shift());
      } else if (rng === 1) {
        temp.push(animalsArray.pop());
      }
    }
      console.log(temp);
    
    
  }

  //  // Setting this.state.animals to the animals json array
  //  state = {
  //   clicked: false,
  //   score: 0,
  //   topscore: 0
  // };

  // handleClickCard = event => {
  //   //record the click state of the event.target picture
  //   const { name, value } = event.target;
    
  //     this.setState({
  //       [name]: value
  //     });
  // }
  
  clickAnimal = id => {
    if (this.state.firstGuess === false) {
      this.setState({ firstGuess: id });
      this.shuffle();
    } else if (this.state.secondGuess === false) {
      if (this.state.firstGuess === id) {

        let score = this.state.score;
        score++;
        this.setState({ score })
      }
    }
    // Filter this.state.animals for animals with an id not equal to the id being removed
    // const animals = this.state.animals.filter(animal => animal.id !== id);
    // Set this.state.animals equal to the new animals array
    // this.setState({ animals });
    // console.log('id --- ' + id)
    // alert("this id is clicked... " + id )
  };

  //clickAnimals = [];
  // clickAnimals = () => {
  //   animals.filter((animal) => {
  //   if(!this.clickAnimals.includes(animal.id)){
  //     console.log('clickedAnimal id: ' + animal.id)
  //     return animal;
  //   }
  //   })
  // }

  componentDidUpdate = () => {
    console.log(this.state);
    
  }
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar score={this.state.score}/>
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
