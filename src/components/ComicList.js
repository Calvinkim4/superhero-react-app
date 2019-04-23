import React, { Component } from 'react';
import SearchComic from './SearchComic';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

class ComicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 50,
            offset: 0,
            data: [],
            title: ''
        }
        this.getComics = this.getComics.bind(this);
        this.getBackComics = this.getBackComics.bind(this);
    }

    setTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    getComics() {
        // if (this.state.offset !== 0) {
        //     this.setState({
        //      offset: this.state.offset + 50
        //     }) 
        //  }
        // this.setState({
        //     offset: this.state.offset + 50
        // }) 
        fetch(`http://gateway.marvel.com/v1/public/comics?orderBy=-onsaleDate&limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let { offset } = this.state;
            offset += 50;
            this.setState(state => {
                return {
                    data: data.data.results,
                    offset
                }
            })
        })
    }

    setStateBack() {
        
    }

    getBackComics() {
        // if (this.state.offset >= 50) {
        //    this.setState({
        //     offset: this.state.offset - 50
        //     }) 
        // }
        fetch(`http://gateway.marvel.com/v1/public/comics?orderBy=-onsaleDate&limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            let { offset } = this.state;
            offset === 0 ? offset += 0 : offset -= 50;
            this.setState(state => {
                return {
                    data: data.data.results,
                    offset
                }
            })
        })
    }

    componentDidMount() {
        this.getComics();
    }

    render () {
        let comics = this.state.data.map(comic => {
            return (
                <div className='comic' key={comic.id}>
                    <div className='comic-desc'>
                        <h1>{comic.title}</h1>
                        {/* <p>{comic.description}</p> */}
                    </div>
                    <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt='comic'/>
                    
                </div>
            )
        })

        return (
            <div>
                <SearchComic />
                <button className='comic-button back' onClick={this.getBackComics}>Back</button>
                <button className='comic-button' onClick={this.getComics}>Next</button>
                <div className='all-comic-div'>
                    {comics}
                </div>
                <button className='comic-button back' onClick={this.getBackComics}>Back</button>
                <button className='comic-button' onClick={this.getComics}>Next</button>
            </div>
        )
    }
}

export default ComicList;