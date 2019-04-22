import React, { Component } from 'react';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

class Comics extends Component {
    constructor(props) {
    super(props);
    this.state = {
        limit: 10,
        offset: 0,
        data: []
    }
}

// componentDidMount() {
//     fetch(`http://gateway.marvel.com/v1/public/characters/Spider-Man/events?apikey=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//       })
// }
    render() {
        return (
            <div>
                <h1>Comics</h1>
            </div>
        )
    }
}

export default Comics;