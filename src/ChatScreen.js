import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {

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
            <div>
                <form action="">
                    <input type="text" />
                    <button>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
