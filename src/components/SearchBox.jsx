import React, { useState } from 'react';


const SearchBox = (props) => {
    const [current, setCurrent] = useState("");
    const changeVal = (e) => {
        e.preventDefault();
        props.setSearchValue(current);
    }
    return (
        <div className='col col-sm-4'>
            <form class="d-flex" role="search" onSubmit={changeVal}>
                <input
                    class="form-control me-2"
                    type="search"
                    aria-label="Search"
                    value={props.value}
                    onChange={(event) => setCurrent(event.target.value)}
                    placeholder='Type to search...'
                />
                <button class="btn btn-outline-success" type='submit'>Search</button>
            </form>
        </div>
    );
};

export default SearchBox;