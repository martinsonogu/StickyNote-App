import React from 'react';
import {MdSearch } from 'react-icons/md';

const Search = ({handleSearchThought} ) => {
    return (
<div className="search">
        <MdSearch className="search-icon" size="1.4em" />
        <input placeholder='Search...' onChange={(event) => handleSearchThought(event.target.value) } type="text" />
</div>

    )
}
export default Search;