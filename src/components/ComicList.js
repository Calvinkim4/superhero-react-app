import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import SearchComic from './SearchComic';
import SingleComic from './SingleComic';

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
        this.getSingleComic = this.getSingleComic.bind(this);
        // this.getBackComics = this.getBackComics.bind(this);
        this.setTitle = this.setTitle.bind(this);

    }

    setTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    getComics() {
        let url = new URL (`http://gateway.marvel.com/v1/public/comics?limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data.data.results
            })
        })
    }

    getSingleComic(event) {
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

    // getBackComics() {
    //     // if (this.state.offset >= 50) {
    //     //    this.setState({
    //     //     offset: this.state.offset - 50
    //     //     }) 
    //     // }
    //     let url = new URL (`http://gateway.marvel.com/v1/public/comics?limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`);
    //     let params = new URLSearchParams(url.search.slice(1));
    //     params.append('title', 'Avengers');
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         let { offset } = this.state;
    //         offset === 0 ? offset += 0 : offset -= 50;
    //         this.setState(state => {
    //             return {
    //                 data: data.data.results,
    //                 offset
    //             }
    //         })
    //     })
    //     // console.log(url);
    // }

    componentDidMount() {
        this.getComics();
    }

    render () {
        let comics = this.state.data.map(comic => {
            return (
                <Link to={`/Comics/${comic.id}`} className='comic' key={comic.id}>
                    <div className='comic-desc'>
                        <h1>{comic.title}</h1>
                        {/* <p>{comic.description}</p> */}
                    </div>
                    <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt='comic'/>
                </Link>
                // <Link className='link' to='/comic-desc'><div className='comic' key={comic.id}>
                //     <div className='comic-desc'>
                //         <h1>{comic.title}</h1>
                //         {/* <p>{comic.description}</p> */}
                //     </div>
                //     <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt='comic'/>
                // </div></Link>
            )
        })

        return (
            <div>
                <SearchComic setTitle={this.setTitle} getComics={this.getSingleComic}/>
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