import React from 'react';

function SearchCharacter(props) {

        return (
            <div>
                <form className='form' onSubmit={props.getCharacter}>
                    <label>
                        <input className='search-input' type='text' onChange={props.setCharacter}/>
                    </label>
                </form>
            </div>
            ) 
    
}

export default SearchCharacter;