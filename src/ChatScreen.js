import React from 'react'

function ChatScreen() {

    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '...',
            message: 'Whats up'
        }
    ])

    return (
        <div className="chatScreen">
            <h3>Chat Screen</h3>
        </div>
    )
}

export default ChatScreen
