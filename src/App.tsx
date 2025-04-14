import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateComponent from "./components/UseState";

function App() {
    return (
        <div>
            <h1>useState</h1>
            <UseStateComponent/>
            <h1>useEffect</h1>
        </div>
    );
}

export default App;
