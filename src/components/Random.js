import React from 'react';

function Random(props) {

    const { data } = props;

        return (
            <div className='single-comic-div'>
                <img src={data.thumbnail.path + '.' + data.thumbnail.extension} alt='character' />
                <div className='single-comic-desc'>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                </div>

            </div>
        ) 
    
}

export default Random;