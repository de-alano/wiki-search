import React from 'react'

const Search = ({ onSearchChange, onSearchSubmit, phrase }) => {
    return (
        <form onSubmit={onSearchSubmit} className="mb-3">
            <div className="mb-3">
                <label htmlFor="search" className="form-label">Enter Search Phrase:</label>
                <input
                    onChange={onSearchChange}
                    value={phrase}
                    className="form-control"
                    type="text"
                    id="search"
                    required
                />
            </div>
            <div className="text-center">
                <button type="Submit" className="btn btn-primary">Search</button>
            </div>
        </form>
    )
}

export default Search
