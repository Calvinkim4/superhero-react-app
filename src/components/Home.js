import React, { Component } from 'react';
import Random from './Random';

const supApiKey = process.env.REACT_APP_SUPERHERO_KEY;
const apiKey = process.env.REACT_APP_MARVEL_KEY;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        let random = Math.floor((Math.random() * 731) + 1);
        fetch(`https://superheroapi.com/api.php/${supApiKey}/${random}`)
          .then(response => response.json())
          .then(data => {
              console.log(data)
            this.setState({
                data: data,
            })
          })
      }

    render() {
        if (this.state.data === null) {
            return <h1>LOADING...</h1>;
        } else {
           return (
            <div>
                <Random data={this.state.data}/>
            </div>
        ) 
        }
        
    }
}

export default Home;