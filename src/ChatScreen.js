import React from 'react'

function ChatScreen() {

    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '...',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: '...',
            message: 'How is it going?'
        },
        {
            message: 'How\'s it going!'
        }
    ]);

    return (
        <div className="chatScreen">
            <h3>Chat Screen</h3>
        </div>
    )
}

export default ChatScreen
