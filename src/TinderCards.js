import React from 'react'

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
        <div>
            <h1>Tinder Cards</h1>
        </div>
    )
}

export default TinderCards
