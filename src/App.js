import React, { useState, useEffect } from 'react'
import axios from 'axios';
import replace from './utils/replace'

import Search from './components/Forms/Search/Search';
import Replace from './components/Forms/Replace/Replace';
import ResultList from './components/ResultList/ResultList';

const App = () => {
    const [phrase, setPhrase] = useState('react');
    const [replaceWith, setReplaceWith] = useState('new phrase')
    const [debouncedPhrase, setDebouncedPhrase] = useState(phrase);
    const [results, setResults] = useState([]);

    const search = async () => {
        const { data } = await axios.get('https://pl.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: phrase,
                srlimit: 10
            }
        });
        setResults(data.query.search)
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedPhrase(phrase);
        }, 750);

        return () => {
            clearTimeout(timerId);
        }
    }, [phrase]);

    useEffect(() => {
        if (debouncedPhrase) {
            search();
        }
    }, [debouncedPhrase]);

    const onSearchSubmit = e => {
        e.preventDefault();
        search();
    };

    const onReplaceChange = e => {
        setReplaceWith(e.target.value);
    };


    const onSingleReplace = e => {
        replace('single', replaceWith)
    };

    const onMultipleReplace = e => {
        replace('multiple', replaceWith);
    };


    return (
        <div className="App">
            <Search
                onSearchChange={e => setPhrase(e.target.value)}
                onSearchSubmit={onSearchSubmit}
                phrase={phrase}
            />
            <Replace
                replaceWith={replaceWith}
                onReplaceChange={onReplaceChange}
                onSingleReplace={onSingleReplace}
                onMultipleReplace={onMultipleReplace}
            />
            {results && <ResultList results={results} />}
        </div>
    )
}

export default App;
