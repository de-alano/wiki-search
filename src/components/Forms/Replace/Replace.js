import React from 'react';

const Replace = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="replaceWith" className="form-label">Replace With:</label>
                <input
                    className="form-control"
                    type="text"
                    id="replaceWith"
                />
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-secondary mr-2">Replace</button>
                <button type="button" className="btn btn-dark">Replace All</button>
            </div>
        </form>
    )
}

export default Replace;
