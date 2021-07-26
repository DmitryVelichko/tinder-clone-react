import React from 'react';
import './Chats.css';

function Chats() {
    return <div className="chats">
            <Chat 
                name="Rachel"
                message="What's up?"
                timestamp="40 seconds ago"
                profilePic="https://unsplash.com/photos/LyeduBb2Auk" 
            />  
            <Chat 
                name="Eva"
                message="Hey, how are you?"
                timestamp="25 minutes ago"
                profilePic="https://unsplash.com/photos/U5rMrSI7Pn4" 
            />  
            <Chat 
                name="Zoe"
                message="Nice photo!"
                timestamp="2 days ago"
                profilePic="https://unsplash.com/photos/8wTPqxlnKM4" 
            />  
            <Chat 
                name="Helen"
                message="Let's talk?"
                timestamp="1 week ago"
                profilePic="https://unsplash.com/photos/sseiVD2XsOk" 
            />  
        </div>
}

export default Chats
