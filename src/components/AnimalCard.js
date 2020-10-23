import React from 'react';

const AnimalCard = ({ name, image }) => {
    return (
        <div>
            <div>
                {name}
            </div>
            <img src={image} alt="pet"/>
        </div>
    )
}

export default AnimalCard;