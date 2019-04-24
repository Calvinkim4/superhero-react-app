import React, { Component } from 'react';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 10,
            offset: 0,
            data: []
        }

        this.getEvents = this.getEvents.bind(this);
    }

    getEvents() {
        fetch(`http://gateway.marvel.com/v1/public/events?limit=${this.state.limit}&offset=${this.state.offset}&apikey=${apiKey}`)
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
        this.getEvents();
    }

    render() {

        let events = this.state.data.map(event => {
            return (
                <div className='event'key={event.id}>
                    <img src={event.thumbnail.path + "." + event.thumbnail.extension} alt='event'/>
                    <div className='event-desc'>
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                    </div>
                    
                </div>
            )
        })
        return (
            <div>
                <button className='comic-button back'>Back</button>
                <button className='comic-button' onClick={this.getComics}>Next</button>
                <div className='all-comic-div'>
                    {events}
                </div>
                <button className='comic-button back' onClick={this.getBackComics}>Back</button>
                <button className='comic-button' onClick={this.getComics}>Next</button>
            </div>
        )
    }
}

export default Events;