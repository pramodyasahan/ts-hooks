import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateComponent from "./components/UseState";
import UseEffectComponent from "./components/UseEffect";
import UseContextComponent from "./components/UseContext";
import UseReducerComponent from "./components/UseReducer";
import UseRefComponent from "./components/UseRef";

function App() {
    return (
        <div>
            <h1>useState</h1>
            <UseStateComponent/>
            <h1>useEffect</h1>
            <UseEffectComponent/>
            <h1>useContext</h1>
            <UseContextComponent/>
            <h1>useReducer</h1>
            <UseReducerComponent/>
            <h1>useRef</h1>
            <UseRefComponent/>
        </div>
    );
}

export default App;
