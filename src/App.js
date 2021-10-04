import React,{useState} from 'react';

import fetchWeather from './api/fetchWeather'
import './Api.css';

const App = () => {
    const [query,setQuery] = useState('');

    const search = async (e) => {
        if(e.key === "Enter") {
            const data = await fetchWeather(query);
            console.log(data);
        }
    }

    return (
        <div className="main-container">
            <input className="search" type="text" placeholder="search..." value={query} onChange={e => setQuery(e.target.value)} onKeyPress={search}></input>
        </div>
    )
}

export default App;