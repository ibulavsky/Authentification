import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Main from "./Components/Main/Main";
import Profile from "./Components/Profile/Profile";
import Posts from "./Components/Posts/Posts";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Route path={'/ '} component={() => <Main/>}/>
            <Route path={'/posts'} component={() => <Posts/>}/>
            <Route path={'/profile'} component={() => <Profile/>}/>
            <Route path={'/login'} component={() => <Login/>}/>
        </div>
    );
}

export default App;
