import React from 'react';

import {Card} from '../card/card';

import './card-list.css';

export const CardList = props => (
    <div className = 'card-list'>
        {props.places.map(place => (
            <Card key={place.id} place={place}/>
        ))}
    </div>
);