import { useEffect, useState } from 'react';
import axios from 'axios';
import { Proposers } from './components/Proposers.tsx';
import { Gateway } from './components/Gateway.tsx';
import logo from './logo.svg';
import './App.css';

function App() {
    let [proposers, setProposers] = useState([])
    let [timestamp, setTimestamp] = useState("")

    const updateProposers = async () => {
        let res = await axios.get("http://135.181.191.125:58017/api/v1/proposers/lookahead?activeOnly=true&futureOnly=true");
        // let json = await res.json();
        setTimestamp(new Date().toLocaleString())
        console.log(res.data)
        setProposers(res.data);
    }

    useEffect(() => {
        const id = setInterval(() => updateProposers(), [1000]);
        return () => clearInterval(id)
    }, [])
  return (
    <div className="App">
        <h1>Holesky Proposer Statistics</h1>
        {/*
        <div style={{marginBottom: 20}}>
            <a href="/mainnet" style={{marginRight: 20}}>Mainnet</a>
            <a href="/holesky">Holesky</a>
        </div>
        */}
        <h2>Available Aggregated Proposers || Last Updated: <span class="count">{ timestamp }</span></h2>
        <h2>Average response latency: <span class="count">200ms</span></h2>
        <h2>Total proposers: <span class="count">51,431</span></h2>

        <Proposers proposers={proposers} />

        <Gateway />
    </div>
  );
}

export default App;
