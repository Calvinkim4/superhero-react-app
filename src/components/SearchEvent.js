import React from 'react';

function SearchEvent(props) {
    return (
        <div>
            <form className='form' onSubmit={props.getEvents}>
                <label>
                    <input type='text' name='title' placeholder='Event Title' onChange={props.setTitle}/>
                </label>
            </form>
        </div>
    )
}

export default SearchEvent;