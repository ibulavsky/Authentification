import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header login={'username'}/>
            <Route path={'/ '} component={() => <Main/>}/>
        </div>
    );
}

export default App;
