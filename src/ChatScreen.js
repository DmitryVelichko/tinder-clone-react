import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Rachel',
            image: 'https://i.picsum.photos/id/823/5616/3744.jpg?hmac=aUM263SMqOF0mo3zsTkx2otCCV-0D3gyrzULgBEpk5Q',
            message: 'Whats up'
        },
        {
            name: 'Rachel',
            image: 'https://i.picsum.photos/id/823/5616/3744.jpg?hmac=aUM263SMqOF0mo3zsTkx2otCCV-0D3gyrzULgBEpk5Q',
            message: 'How is it going?'
        },
        {
            message: 'How\'s it going!'
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');

    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/21</p>
            {messages.map((message) => (
                message.name ? (
                     <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )          
            ))}
            
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField" 
                    type="text"
                    placeholder="Type a message..."
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen
