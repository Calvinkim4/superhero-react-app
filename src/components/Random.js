import React from 'react';

function Random(props) {

    const { data } = props;

    if (props.data !== {}) {
        return (
            <div>
                <h1>{data.name}</h1>
                {/* <img src={data.image.url} alt='superhero' /> */}
                {/* <ul>
                    <li>Combat: {data.powerstats.combat}</li>
                    <li>Durability: {data.powerstats.durability}</li>
                    <li>Intelligence: {data.powerstats.intelligence}</li>
                    <li>Power: {data.powerstats.power}</li>
                    <li>Speed: {data.powerstats.speed}</li>
                    <li>Strength: {data.powerstats.strength}</li>
                </ul> */}
            </div>
            ) 
    } else {
        return <h1>Loading...</h1>;
    }
    
}

export default Random;