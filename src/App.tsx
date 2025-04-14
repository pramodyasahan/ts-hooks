import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateComponent from "./components/UseState";
import UseEffectComponent from "./components/UseEffect";
import UseContextComponent from "./components/UseContext";

function App() {
    return (
        <div>
            <h1>useState</h1>
            <UseStateComponent/>
            <h1>useEffect</h1>
            <UseEffectComponent/>
            <h1>useContext</h1>
            <UseContextComponent/>
        </div>
    );
}

export default App;
