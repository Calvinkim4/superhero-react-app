import React from 'react';

function Random(props) {

    const { name, thumbnail, powerStats} = props;

    if (props === undefined) {
        return null;
    } else {
       return (
        <div>
            <h1>{name}</h1>
                <img src={thumbnail} alt='superhero' />
                <ul>
                    <li>Combat: {powerStats.combat}</li>
                    <li>Durability: {powerStats.durability}</li>
                    <li>Intelligence: {powerStats.intelligence}</li>
                    <li>Power: {powerStats.power}</li>
                    <li>Speed: {powerStats.speed}</li>
                    <li>Strength: {powerStats.strength}</li>
                </ul>
                {/* <p>{this.state.description}</p>
                <img src={this.state.thumbnail} alt='spiderman'/> */}
        </div>
        ) 
    }
    
}

export default Random;