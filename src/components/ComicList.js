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
            title: '',
            yearStarted: ''
        }
        this.getComics = this.getComics.bind(this);
        // this.getBackComics = this.getBackComics.bind(this);
        this.setTitle = this.setTitle.bind(this);

    }

    setTitle(event) {
        this.setState({
            title: event.target.value
        })
    }


    // setYearStarted(event) {
    //     this.setState({
    //         yearStarted: event.target.value
    //     })
    // }

    getComics(event) {
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
        // params.append('yearStarted', this.state.yearStarted);
        url.search = new URLSearchParams(params)
        fetch(url)
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
        // this.getComics();

        let url = new URL (`http://gateway.marvel.com/v1/public/comics?limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data.data.results
            })
        })
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
                <SearchComic setTitle={this.setTitle} getComics={this.getComics}/>
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