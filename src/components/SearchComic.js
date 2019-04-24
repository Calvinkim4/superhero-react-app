import React, { Component } from 'react';

class SearchComic extends Component {
    render () {
        return (
            <div>
                <form className='form' onSubmit={this.props.getComics}>
                    <label>
                        <input type='text' name='title' placeholder='Comic Title' onChange={this.props.setTitle}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default SearchComic;