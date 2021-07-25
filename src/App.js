import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


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
          <SwipeButtons />
        </Route>
      </Switch>
    </Router>   
    </div>
  );
}

export default App;

