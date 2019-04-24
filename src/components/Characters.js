import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchCharacter from './SearchCharacter';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 100,
            offset: 0,
            data: [],
            characterName: ''
        }
        this.setCharacter = this.setCharacter.bind(this)
        this.getCharacter = this.getCharacter.bind(this)

    }

    componentDidMount() {
        // for (let i = this.state.id; (i <= this.state.id + 10) && (i <= 731); i++) {

        // }
        // fetch(`https://superheroapi.com/api.php/${supApiKey}/${this.state.id}`)
        //   .then(response => response.json())
        //   .then(data => {
        //     this.setState({
        //         id: data.id,
        //         data: data,
        //         url: data.image.url
        //     })
        //   })
        // fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
        // .then(response => response.json())
        //   .then(data => {
        //     // console.log(data)
        //     this.setState({
        //         data: data
        //     })
        //   })
        fetch(`http://gateway.marvel.com/v1/public/characters?orderBy=name&limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`)
        .then(response => response.json())
          .then(data => {
            this.setState({
                data: data.data.results
                // offset: this.state.offset + 100,
            })
          })
    }

    setCharacter(event) {
        this.setState({
            characterName: event.target.value
        })
    }

    getCharacter(event) {
        event.preventDefault();

        fetch(`http://gateway.marvel.com/v1/public/characters?name=${this.state.characterName}&apikey=${apiKey}`)
        .then(response => response.json())
          .then(data => {
            // console.log(data.data.results[0])
            this.setState({
                data: data.data.results
            })
            // console.log(this.state.character.thumbnail.path + '.' + this.state.character.thumbnail.extension)
          })
    }

    render() {
        let allCharacterNames = this.state.data.map(character => {
            return (
                <Link to={`/Characters/${character.id}`} className='comic' key={character.id}>
                    <div className='comic-desc'>
                        <h1>{character.name}</h1>
                    </div>
                    <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt='character' />
                </Link>
            )
        })

        return (
            <div>
                <SearchCharacter getCharacter={this.getCharacter} setCharacter={this.setCharacter}/>
                <button className='comic-button back'>Back</button>
                <button className='comic-button'>Next</button>
                <div className='character-list'>
                    {allCharacterNames}
                </div>
                <button className='comic-button back'>Back</button>
                <button className='comic-button'>Next</button>

            </div>
            
        )
    }
}

export default Characters;