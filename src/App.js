import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import Events from './components/Events';
import Comics from './components/Comics';
import SingleComic from './components/SingleComic';
import SingleEvent from './components/SingleEvent';
import SingleCharacter from './components/SingleCharacter';


class App extends Component {

  render() {
    return (
      <div className="App">
      <nav>
        <Link to='/superhero-react-app/'><li>Home</li></Link>
        <Link to='/superhero-react-app/Characters'><li>Characters</li></Link>
        <Link to='/superhero-react-app/Events'><li>Events</li></Link>
        <Link to='/superhero-react-app/Comics'><li>Comics</li></Link>
      </nav>
      
      
        <main>
          <Route exact path='/superhero-react-app/' component={Home} />
          <Route exact path='/superhero-react-app/Characters' component={Characters} />
          <Route exact path='/superhero-react-app/Events' component={Events} />
          <Route exact path='/superhero-react-app/Comics' component={Comics} />
          <Route path='/superhero-react-app/Comics/:id' render={(props) => <SingleComic {...props} />} />
          <Route path='/superhero-react-app/Events/:id' render={(props) => <SingleEvent {...props} />} />
          <Route path='/superhero-react-app/Characters/:id' render={(props) => <SingleCharacter {...props} />} />

        </main>
      </div>
    )
  }
}

export default App;
