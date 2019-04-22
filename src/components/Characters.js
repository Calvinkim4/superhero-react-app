import React, { Component } from 'react';

const supApiKey = process.env.REACT_APP_SUPERHERO_KEY;

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            data: []
        }
    }

    showMoreCharacters() {
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
        fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
        .then(response => response.json())
          .then(data => {
            // console.log(data)
            this.setState({
                data: data
            })
          })
    }

    render() {
        let allCharacterNames = this.state.data.map(character => {
            return <li key={character.id}>{character.name}</li>
        })
        return (
            <div>
                <h1>Character List</h1>
                <button onClick={() => this.showMoreCharacters()}>MORE</button>
                {allCharacterNames}
            </div>
        )
    }
}

export default Characters;