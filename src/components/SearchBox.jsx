import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBox = (props) => {
    const [current, setCurrent] = useState("");
    const changeVal = (e) => {
        e.preventDefault();
        props.setSearchValue(current);
    }
    return (
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className='navbar-brand' to="/movieshub">Movies Hub</Link>
    <div className='col col-sm-4'>
            <form className="d-flex" role="search" onSubmit={changeVal}>
                <input
                    className="form-control me-2"
                    type="search"
                    aria-label="Search"
                    value={props.value}
                    onChange={(event) => setCurrent(event.target.value)}
                    placeholder='Type to search...'
                />
                <button className="btn btn-outline-success" type='submit'>Search</button>
            </form>
        </div>
  </div>
</nav>
    );
};

export default SearchBox;