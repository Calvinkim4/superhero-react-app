import React, { Component } from 'react';
import Random from './Random';

// const apiKey = process.env.REACT_APP_MARVEL_KEY;
const supApiKey = process.env.REACT_APP_SUPERHERO_KEY;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            data: {},
            url: ''
        }
    }

    componentDidMount() {
        let random = Math.floor((Math.random() * 731) + 1);
        fetch(`https://superheroapi.com/api.php/${supApiKey}/${random}`)
          .then(response => response.json())
          .then(data => {
            this.setState({
                id: data.id,
                data: data,
                url: data.image.url
            })
          })
      }

    render() {
        console.log(this.state.url)
        // console.log(this.state.data.image.url)
        return (
            <div>
                <Random data={this.state.data}/>
            </div>
        )
    }
}

export default Home;