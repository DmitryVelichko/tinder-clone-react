import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase';


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

    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            snapshot.docs.map(doc => doc.data())
        ));
    }, []);

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
