import React from 'react'

const Search = () => {
    return (
        <form>
            <label htmlFor="search">Enter Search Phrase:</label>
            <input
                type="text"
                id="search"
                required
            />
            <button type="Submit">Search</button>
        </form>
    )
}

export default Search
