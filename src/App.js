import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import Posts from "./Components/Posts/Posts";

function App() {
    return (
        <div className="App">
            <Header login={'username'}/>
            <Route path={'/ '} component={() => <Main/>}/>
            <Route path={'/posts'} component={() => <Posts/>}/>
            <Route path={'/profile'} component={() => <Profile/>}/>
        </div>
    );
}

export default App;
