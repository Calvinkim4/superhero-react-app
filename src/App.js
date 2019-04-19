import React, { Component } from 'react';
import './App.css';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    fetch(`http://gateway.marvel.com/v1/public/characters?name=Spider-Man&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.data);
        this.setState({
          name: data.data.results[0].name,
          description: data.data.results[0].description,
          thumbnail: data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        <img src={this.state.thumbnail} alt='spiderman'/>
      </div>
    );
  }
}

export default App;
