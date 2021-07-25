import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import Mahatma_img from './img/Mahatma.jpg';
// import Rabi_img from './img/rabindranat-tagor.jpg';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Mahatma Gandhi',
            url: "https://helenadailyenglish.com/wp-content/uploads/2021/02/mahatma-gandhi-medium.jpg"
        },

        {
            name: 'Rabindranat Tagor',
            url: "https://interesnyefakty.org/wp-content/uploads/rabindranat-tagor.jpg"
        }
    ]);
    return (
        <div>
            <h1>Tinder Cards</h1>
            <div className='tinderCards__cardContainer'> 
            {people.map(person => (
                <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default TinderCards
