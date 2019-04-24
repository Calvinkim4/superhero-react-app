import React, { Component } from 'react';
import Random from './Random';
import CharacterList from '../../src/data/character-list.json';

// const supApiKey = process.env.REACT_APP_SUPERHERO_KEY;
const apiKey = process.env.REACT_APP_MARVEL_KEY;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        // let random = Math.floor((Math.random() * 1251) + 1);
        // fetch(`http://gateway.marvel.com/v1/public/characters?name=${CharacterList[random]}&apikey=${apiKey}`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        //     this.setState({
        //         data: data.data.results[0]
        //     })
        // })

    }

    render() {
        // if (this.state.data === null) {
        //     return <h1>LOADING...</h1>;
        // } else {
        //    return (
        //     <div>
        //         <img className='marvel-logo' src='https://media2.giphy.com/media/10ADhj1QPawFna/giphy.gif?cid=790b76115cc079a96d68734d4973c9b0' alt='marvel logo' />
        //         {/* <Random data={this.state.data}/> */}
        //     </div>
        // ) 
        // }
        return (
            <div>
                <img className='marvel-logo' src='https://media2.giphy.com/media/10ADhj1QPawFna/giphy.gif?cid=790b76115cc079a96d68734d4973c9b0' alt='marvel logo' />
            </div>
        ) 
        
    }
}

export default Home;