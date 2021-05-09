import React from 'react'

const Replace = () => {
    return (
        <form>
            <label htmlFor="replaceWith">Replace With:</label>
            <input
                type="text"
                id="replaceWith"
            />
            <button type="button">Replace</button>
            <button type="button">Replace All</button>
        </form>
    )
}

export default Replace
