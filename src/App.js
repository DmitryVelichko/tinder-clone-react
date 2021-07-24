import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './TinderCards';


function App() {
  return (
    <div className="App">
    <Header />
    <Router>  
      <Switch>
        <Route path="/chat">
          <h1>I am the chatpage</h1>
        </Route>
        <Route path="/">
          <TinderCards />
        </Route>
      </Switch>
    </Router>   
    </div>
  );
}

export default App;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyDF4F-MLxCy_JdTY4ltYrrXAwT4f4LGJYk",
  authDomain: "tinder-clone-c5cea.firebaseapp.com",
  projectId: "tinder-clone-c5cea",
  storageBucket: "tinder-clone-c5cea.appspot.com",
  messagingSenderId: "466714597857",
  appId: "1:466714597857:web:3923d445c27026788a5aa0",
  measurementId: "G-LY3ZM68ZBV"
};
*/