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
    this.getComics = this.getComics.bind(this);
}

    getComics() {
        fetch(`http://gateway.marvel.com/v1/public/comics?limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                data: data.data.results,
                offset: this.state.offset + 10
            })
        })
    }

    componentDidMount() {
        this.getComics();
    }

    render() {

        let comics = this.state.data.map(comic => {
            return (
                <div className='event'key={comic.id}>
                    <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt='event'/>
                    <div className='event-desc'>
                        <h1>{comic.title}</h1>
                        <p>{comic.description}</p>
                    </div>
                    
                </div>
            )
        })

        return (
            <div>
                <button onClick={this.getComics}>More Comics</button>
                {comics}
            </div>
        )
    }
}

export default Comics;