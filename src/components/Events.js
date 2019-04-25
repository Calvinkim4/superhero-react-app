import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SearchEvent from './SearchEvent';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 30,
            offset: -30,
            data: null,
            title: ''
        }

        this.getEvents = this.getEvents.bind(this);
        this.getBackEvents = this.getBackEvents.bind(this);
        this.getSpecificEvents = this.getSpecificEvents.bind(this);
        this.setTitle = this.setTitle.bind(this);
    }

    setTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    getEvents() {
        fetch(`https://gateway.marvel.com/v1/public/events?limit=${this.state.limit}&offset=${this.state.offset + 30}&apikey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            this.setState({
                data: data.data.results,
                offset: this.state.offset + 30
            })
        })
    }

    getBackEvents() {
        fetch(`https://gateway.marvel.com/v1/public/events?limit=${this.state.limit}&offset=${this.state.offset - 30}&apikey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            this.setState({
                data: data.data.results,
                offset: this.state.offset - 30
            })
            if (this.state.offset <= 0) {
                this.setState({
                    offset: 0
                 }) 
             }
        })
    }

    getSpecificEvents(event) {
        event.preventDefault();

        this.setState({
            data: null
        })

        if (this.state.title !== '') {
            let url = new URL (`https://gateway.marvel.com/v1/public/events?limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`);
            let params = new URLSearchParams(url.search.slice(1));
            params.append('name', this.state.title);
            url.search = new URLSearchParams(params)
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.data.results
                })
            })
        }
        

    }

    componentDidMount() {
        this.getEvents();
    }

    render() {

        if (this.state.data === null) {
            return <h1>LOADING...</h1>
        } else {
            if (this.state.data.length === 0) {
                return (
                    <div>
                        <SearchEvent setTitle={this.setTitle} getEvents={this.getSpecificEvents}/>
                        <h1>NO MATCH</h1>
                    </div>
                )
            }
            let events = this.state.data.map(event => {
                return (
                    <Link to={`/Events/${event.id}`} className='comic' key={event.id}>
                        <div className='comic-desc'>
                            <h1>{event.title}</h1>
                        </div>
                        <img src={event.thumbnail.path + "." + event.thumbnail.extension} alt='event'/>
                    </Link>
                )
            })
            if (this.state.offset <= 0) {
                return (
                    <div>
                        <SearchEvent setTitle={this.setTitle} getEvents={this.getSpecificEvents}/>
                        <button className='comic-button' onClick={this.getEvents}>Next</button>
                        <div className='all-comic-div'>
                            {events}
                        </div>
                        <button className='comic-button' onClick={this.getEvents}>Next</button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <SearchEvent setTitle={this.setTitle} getEvents={this.getSpecificEvents}/>
                        <button className='comic-button back' onClick={this.getBackEvents}>Back</button>
                        <button className='comic-button' onClick={this.getEvents}>Next</button>
                        <div className='all-comic-div'>
                            {events}
                        </div>
                        <button className='comic-button back' onClick={this.getBackEvents}>Back</button>
                        <button className='comic-button' onClick={this.getEvents}>Next</button>
                    </div>
                )
            }
        }
        
    }
}

export default Events;