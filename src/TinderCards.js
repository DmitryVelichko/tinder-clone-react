import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import Mahatma_img from './img/Mahatma.jpg';
import Rabi_img from './img/rabindranat-tagor.jpg';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Ivan Ivanov',
            url: "Mahatma_img"
        },

        {
            name: 'Ivan Petrov',
            url: "Rabi_img"
        }
    ]);
    return (
        <div>
            <h1>Tinder Cards</h1>
            {people.map(person => (
                <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
}

export default TinderCards
