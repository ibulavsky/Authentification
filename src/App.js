import React, {Component} from 'react';
import styles from './App.module.css';
import {Redirect, Route} from "react-router-dom";
import Main from "./Components/Main/Main";
import Profile from "./Components/Profile/Profile";
import Posts from "./Components/Posts/Posts";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {connect} from "react-redux";
import {checkAuthorization} from "./BLL/authenticationReducer";

class App extends Component {

    componentDidMount() {
        this.props.checkAuthorization()
    };

    render(props) {
        return (
            <div className={styles.app}>
                <Header/>
                <div className={styles.wrapper}>
                    <Route path={'/ '} component={() => <Main/>}/>
                    <Route path={'/posts'} component={() => <Posts/>}/>
                    <Route path={'/profile'} component={() => <Profile/>}/>
                    <Route path={'/login'} component={() => <Login/>}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default connect(null, {checkAuthorization})(App);
