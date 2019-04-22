import React, { Component } from 'react';
import Random from './Random';

const apiKey = process.env.REACT_APP_MARVEL_KEY;
const supApiKey = process.env.REACT_APP_SUPERHERO_KEY;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            description: '',
            thumbnail: '',
            powerStats: ''
        }
    }

    componentDidMount() {
        // fetch(`http://gateway.marvel.com/v1/public/characters?name=Spider-Man&apikey=${apiKey}`)
        //   .then(response => response.json())
        //   .then(data => {
        //     // console.log(data.data);
        //     this.setState({
        //       name: data.data.results[0].name,
        //       description: data.data.results[0].description,
        //       thumbnail: data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension
        //     })
        //   })
        let random = Math.floor((Math.random() * 731) + 1);
        // fetch(`https://superheroapi.com/api.php/${supApiKey}/search/Nova`)
        fetch(`https://superheroapi.com/api.php/${supApiKey}/${random}`)
          .then(response => response.json())
          .then(data => {
            // console.log(data.powerstats.intelligence);
            this.setState({
                name: data.name,
                thumbnail: data.image.url,
                powerStats: data.powerstats
            //   name: data.results[0].name,
            //   thumbnail: data.results[0].image.url
            })
          })
      }

    render() {
        return (
            <div>
                <Random name={this.state.name} thumbnail={this.state.thumbnail} powerStats={this.state.powerStats}/>
            </div>
        )
    }
}

export default Home;