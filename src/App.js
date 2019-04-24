import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import Events from './components/Events';
import Comics from './components/Comics';
import SingleComic from './components/SingleComic';
import SingleEvent from './components/SingleEvent';
import SingleCharacter from './components/SingleCharacter';



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
          <Route exact path='/Characters' component={Characters} />
          <Route exact path='/Events' component={Events} />
          <Route exact path='/Comics' component={Comics} />
          <Route path='/Comics/:id' render={(props) => <SingleComic {...props} />} />
          <Route path='/Events/:id' render={(props) => <SingleEvent {...props} />} />
          <Route path='/Characters/:id' render={(props) => <SingleCharacter {...props} />} />

        </main>
      </div>
    );
  }
}

export default App;
