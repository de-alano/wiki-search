import React from 'react';

const Replace = ({
    replaceWith,
    onReplaceChange,
    onSingleReplace,
    onMultipleReplace
}) => {

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="replaceWith" className="form-label">Replace With:</label>
                <input
                    onChange={onReplaceChange}
                    value={replaceWith}
                    className="form-control"
                    type="text"
                    id="replaceWith"
                />
            </div>
            <div className="text-center">
                <button
                    onClick={onSingleReplace}
                    type="button"
                    className="btn btn-secondary single-replace-btn"
                >
                    Replace
                </button>
                <button
                    onClick={onMultipleReplace}
                    type="button"
                    className="btn btn-dark multiple-replace-btn"
                >
                    Replace All
                </button>
            </div>
        </form>
    )
}

export default Replace;
