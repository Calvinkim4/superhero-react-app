import React from 'react';

function SearchComic(props) {
    return (
        <div>
            <form onSubmit={props.getComics}>
                <label>
                    <input type='text' name='title' placeholder='Comic Title' onChange={props.setTitle}/>
                </label>
            </form>
        </div>
    )
}

export default SearchComic;