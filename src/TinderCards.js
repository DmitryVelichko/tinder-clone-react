import React from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Ivan Ivanov',
            url: ''
        },

        {
            name: 'Ivan Petrov',
            url: ''
        }
    ]);
    return (
        <div style={{ backgroundImage: `url(${person.url})` }}>
            <h1>Tinder Cards</h1>
            {people.map(person => (
                <TinderCard>
                    <div className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
        </div>
    )
}

export default TinderCards
