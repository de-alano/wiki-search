import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Search from './components/Forms/Search/Search';
import Replace from './components/Forms/Replace/Replace';
import ResultList from './components/ResultList/ResultList';

const App = () => {
    const [phrase, setPhrase] = useState('react');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (phrase) {
            search();
        }
    }, [phrase]);

    const onSearchChange = e => {
        e.preventDefault();
        setPhrase(e.target.value)
    };

    const onSearchSubmit = e => {
        e.preventDefault();
        search();
    };

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

    return (
        <div className="App">
            <Search
                onSearchChange={onSearchChange}
                onSearchSubmit={onSearchSubmit}
                phrase={phrase}
            />
            <Replace />
            {results && <ResultList results={results} />}
        </div>
    )
}

export default App;
