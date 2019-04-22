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
                // title: data.data.results[1].title,
                // description: data.data.results[1].description,
                // thumbnail: data.data.results[1].thumbnail.path + "." + data.data.results[0].thumbnail.extension
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
                <button onClick={this.getEvents}>More Events</button>
                {events}
            </div>
            // <div className='event'>
            //     <img src={this.state.thumbnail} alt='event'/>
            //     <div className='event-desc'>
            //         <h1>{this.state.title}</h1>
            //         <p>{this.state.description}</p>
            //     </div>
                
                
            // </div>
        )
    }
}

export default Events;