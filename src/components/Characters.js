import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchCharacter from './SearchCharacter';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 100,
            offset: -100,
            data: null,
            characterName: ''
        }
        this.getCharacters = this.getCharacters.bind(this);
        this.getBackCharacters = this.getBackCharacters.bind(this);
        this.setCharacter = this.setCharacter.bind(this)
        this.getCharacter = this.getCharacter.bind(this)

    }

    getCharacters() {
        fetch(`https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=${this.state.limit}&offset=${this.state.offset + 100}&apikey=${apiKey}`)
        .then(response => response.json())
          .then(data => {
            this.setState({
                data: data.data.results,
                offset: this.state.offset + 100
                })
            })
    }

    getBackCharacters() {
        fetch(`https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=${this.state.limit}&offset=${this.state.offset - 100}&apikey=${apiKey}`)
        .then(response => response.json())
          .then(data => {
            this.setState({
                data: data.data.results,
                offset: this.state.offset - 100
                })
            })
            if (this.state.offset <= 0) {
                this.setState({
                    offset: 0
                 }) 
             }
    }

    componentDidMount() {
        this.getCharacters();
    }

    setCharacter(event) {
        this.setState({
            characterName: event.target.value
        })
    }

    getCharacter(event) {
        event.preventDefault();

        this.setState({
            data: null
        })

        if (this.state.characterName !== '') {
            fetch(`https://gateway.marvel.com/v1/public/characters?name=${this.state.characterName}&apikey=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        data: data.data.results
                    })
                })
        }
        
    }

    render() {
        if (this.state.data === null) {
            return <h1>LOADING...</h1>
        } else {
            if (this.state.data.length === 0) {
                return (
                    <div>
                        <SearchCharacter getCharacter={this.getCharacter} setCharacter={this.setCharacter}/>
                        <h1>NO MATCH</h1>
                    </div>
                )
            }
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
        
            if (this.state.offset <= 0) {
                return (
                    <div>
                        <SearchCharacter getCharacter={this.getCharacter} setCharacter={this.setCharacter}/>
                        <button className='comic-button' onClick={this.getCharacters}>Next</button>
                        <div className='character-list'>
                            {allCharacterNames}
                        </div>
                        <button className='comic-button' onClick={this.getCharacters}>Next</button>
                    </div>
                    
                )
            } else {
                return (
                    <div>
                        <SearchCharacter getCharacter={this.getCharacter} setCharacter={this.setCharacter}/>
                        <button className='comic-button back' onClick={this.getBackCharacters}>Back</button>
                        <button className='comic-button' onClick={this.getCharacters}>Next</button>
                        <div className='character-list'>
                            {allCharacterNames}
                        </div>
                        <button className='comic-button back' onClick={this.getBackCharacters}>Back</button>
                        <button className='comic-button' onClick={this.getCharacters}>Next</button>
                    </div>
                    
                )
            }
        }
        return null;

    }
}

export default Characters;