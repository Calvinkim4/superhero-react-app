import React, { Component } from 'react';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

class SingleComic extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            description: '',
            thumbnail: ''
        }
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props

        fetch(`http://gateway.marvel.com/v1/public/comics/${id}?apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                title: data.data.results[0].title,
                description: data.data.results[0].description,
                thumbnail: `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`
            })
        })
    }
    
    render() {


        return(
            <div className='single-comic-div'>
                <img src={this.state.thumbnail} alt='comic' />
                <div className='single-comic-desc'>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.description}</p>
                </div>
                

            </div>
        )
    }
}

export default SingleComic;