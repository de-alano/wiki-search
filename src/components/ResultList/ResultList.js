import React from 'react';
import ResultItem from './ResultItem/ResultItem';


const ResultList = ({ results }) => {
    const renderedResultList = results.map(({ pageid, title, snippet }) => (
        <ResultItem
            key={pageid}
            title={title}
            snippet={snippet}
        />
    ));


    return (
        <div className="result-list mt-4">
            {renderedResultList}
        </div>
    )
}

export default ResultList;
