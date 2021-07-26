import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return <div className="chats">
            <Chat 
                name="Rachel"
                message="What's up?"
                timestamp="40 seconds ago"
                profilePic="https://i.picsum.photos/id/823/5616/3744.jpg?hmac=aUM263SMqOF0mo3zsTkx2otCCV-0D3gyrzULgBEpk5Q" 
            />  
            <Chat 
                name="Eva"
                message="Hey, how are you?"
                timestamp="25 minutes ago"
                profilePic="https://i.picsum.photos/id/836/5184/3456.jpg?hmac=_ZfBJnWLbaYFoRWfoj1LNoA_PPzz5EunZNOyXUsUVZ8" 
            />  
            <Chat 
                name="Zoe"
                message="Nice photo!"
                timestamp="2 days ago"
                profilePic="https://i.picsum.photos/id/832/5472/3648.jpg?hmac=LAAPt-jIUpMimD_tIgqYfATCbzDKKlqZUh6f5dyb5qY" 
            />  
            <Chat 
                name="Helen"
                message="Let's talk?"
                timestamp="1 week ago"
                profilePic="https://i.picsum.photos/id/821/5472/3648.jpg?hmac=QshI0kT8ITshXjqnyV3NOsrvTrH74OHZzEzLM1HOOhk" 
            />  
        </div>
}

export default Chats
