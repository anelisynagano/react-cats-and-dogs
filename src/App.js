import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import AnimalsList from './components/AnimalsList';

const cats = [
  {
    name: 'Kandy',
    imgUrl: 'https://images-cdn.9gag.com/photo/3630193_700b.jpg',
  },
  {
    name: 'Sir John II',
    imgUrl: 'https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584',
  },
]

const dogs = [
  {
    name: 'Bill',
    imgUrl: 'https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg',
  },
  {
    name: 'Shawna',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx',
  },
];

const animals = [...cats, ...dogs]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'All'
    }
  }

  handleUserSelection = (e) => {
    this.setState({ selection: e.target.value })
  }

  handleChoice = () => {
    if (this.state.selection === 'Cats') {
      return cats
    } else if (this.state.selection === 'Dogs') {
      return dogs
    } else {
      return animals
    }
  }

  render() {
    return (
      <>
        <Dropdown handleSelect={this.handleUserSelection} />
        <AnimalsList animalsList={this.handleChoice()} />
      </>
    )
  }
}

export default App;
