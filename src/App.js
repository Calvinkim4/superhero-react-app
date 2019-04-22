import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import Events from './components/Events';
import Comics from './components/Comics';

// const apiKey = process.env.REACT_APP_MARVEL_KEY;
// const supApiKey = process.env.REACT_APP_SUPERHERO_KEY;

class App extends Component {

  render() {
    return (
      <div className="App">
      <nav>
        <Link to='/'><li>Home</li></Link>
        <Link to='/Characters'><li>Characters</li></Link>
        <Link to='/Events'><li>Events</li></Link>
        <Link to='/Comics'><li>Comics</li></Link>
      </nav>
      
        <main>
          <Route path='/' exact component={Home} />
          <Route path='/Characters' component={Characters} />
          <Route path='/Events' component={Events} />
          <Route path='/Comics' component={Comics} />
        </main>
      </div>
    );
  }
}

export default App;
