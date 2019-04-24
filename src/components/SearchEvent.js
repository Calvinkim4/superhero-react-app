import React, { Component } from 'react';

class SearchEvent extends Component {
    render () {
        return (
            <div>
                <form className='form' onSubmit={this.props.getEvents}>
                    <label>
                        <input type='text' name='title' placeholder='Event Title' onChange={this.props.setTitle}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default SearchEvent;