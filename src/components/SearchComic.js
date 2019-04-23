import React, { Component } from 'react';

class SearchComic extends Component {
    render () {
        return (
            <div>
                <form className='form'>
                    <label>
                        <input type='text' name='title' placeholder='Comic Title'/>
                    </label>
                    <label>
                        <input type='text' name='character' placeholder='Character Name'/>
                    </label>
                    <label>
                        <input type='text' name='event' placeholder='Event'/>
                    </label>
                    <label>
                        <input type='text' name='creators' placeholder='Creator'/>
                    </label>
                    <label>
                        <input type='text' name='start-year' placeholder='Year Started'/>
                    </label>
                </form>
            </div>
        )
    }
}

export default SearchComic;