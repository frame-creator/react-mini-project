import React from 'react';

import './card.css';

export const Card = props => (
    <div className='card-container'>
        <img 
        alt = 'place'
        src = {`https://robohash.org/${props.place.id}?set=set4&size=180x180`}
        />
        <h2>{props.place.name}</h2>
        <p>{props.place.email} </p>
    </div>
);