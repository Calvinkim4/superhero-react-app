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
        <Link to='/Home'><li>Home</li></Link>
        <Link to='/Characters'><li>Characters</li></Link>
        <Link to='/Events'><li>Events</li></Link>
        <Link to='/Comics'><li>Comics</li></Link>
      </nav>
      
        <main>
          <Route exact path="/" render={() => (<Redirect to="/Home"/>)}/>
          <Route exact path="/superhero-react-app" render={() => (<Redirect to="/Home"/>)}/>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Characters' component={Characters} />
          <Route exact path='/Events' component={Events} />
          <Route exact path='/Comics' component={Comics} />
          <Route path='/Comics/:id' render={(props) => <SingleComic {...props} />} />
          <Route path='/Events/:id' render={(props) => <SingleEvent {...props} />} />
          <Route path='/Characters/:id' render={(props) => <SingleCharacter {...props} />} />

        </main>
      </div>
    )
  }
}

export default App;
