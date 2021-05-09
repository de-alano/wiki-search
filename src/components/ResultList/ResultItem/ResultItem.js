import React from 'react'

const ResultItem = ({ title, snippet }) => {
    return (
        <div className="result-item card mb-2">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: snippet }}
                >
                </p>
            </div>
        </div>
    )
}

export default ResultItem
