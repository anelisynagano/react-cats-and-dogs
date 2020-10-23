import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalsList = ({ animalsList }) => {
    return (
        <div>
           { animalsList.map(animal => <AnimalCard key={animal.name} name={animal.name} image={animal.imgUrl} />) }
        </div>
    )
}

export default AnimalsList;