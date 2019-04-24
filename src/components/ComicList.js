import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchComic from './SearchComic';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

class ComicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 50,
            offset: -50,
            data: [],
            title: ''
        }
        this.getComics = this.getComics.bind(this);
        this.getSpecificComics = this.getSpecificComics.bind(this);
        this.getBackComics = this.getBackComics.bind(this);
        this.setTitle = this.setTitle.bind(this);

    }

    setTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    getComics() {
        // this.setState({
        //     offset: this.state.offset + 50
        // }) 
        let url = new URL (`http://gateway.marvel.com/v1/public/comics?limit=${this.state.limit}&offset=${this.state.offset + 50}&apikey=${apiKey}`);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data.data.results,
                offset: this.state.offset + 50
            })
        })
    }

    getBackComics() {
        // if (this.state.offset >= 50) {
        //    this.setState({
        //     offset: 50
        //     }) 
        // }
        let url = new URL (`http://gateway.marvel.com/v1/public/comics?limit=${this.state.limit}&offset=${this.state.offset - 50}&apikey=${apiKey}`);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // let { offset } = this.state;
            // offset === 0 ? offset += 0 : offset -= 50;
            this.setState({
                data: data.data.results,
                offset: this.state.offset - 50
            })
            if (this.state.offset <= 0) {
                this.setState({
                    offset: 0
                 }) 
             }
        })
        // console.log(url);
    }

    getSpecificComics(event) {
        event.preventDefault();
        // if (this.state.offset !== 0) {
        //     this.setState({
        //      offset: this.state.offset + 50
        //     }) 
        //  }
        // this.setState({
        //     offset: this.state.offset + 50
        // }) 
        let url = new URL (`http://gateway.marvel.com/v1/public/comics?limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`);
        let params = new URLSearchParams(url.search.slice(1));
        params.append('title', this.state.title);
        url.search = new URLSearchParams(params)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data.data.results
            })
        })
    }

    componentDidMount() {
        this.getComics();
    }

    render () {
        let comics = this.state.data.map(comic => {
            return (
                <Link to={`/Comics/${comic.id}`} className='comic' key={comic.id}>
                    <div className='comic-desc'>
                        <h1>{comic.title}</h1>
                    </div>
                    <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt='comic'/>
                </Link>
            )
        })

        if (this.state.offset <= 0) {
            return (
                <div>
                    <SearchComic setTitle={this.setTitle} getComics={this.getSpecificComics}/>
                    <button className='comic-button' onClick={this.getComics}>Next</button>
                    <div className='all-comic-div'>
                        {comics}
                    </div>
                    <button className='comic-button' onClick={this.getComics}>Next</button>
                </div>
            )
        } else {
            return (
                <div>
                    <SearchComic setTitle={this.setTitle} getComics={this.getSpecificComics}/>
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
}

export default ComicList;