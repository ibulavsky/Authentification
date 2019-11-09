import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../BLL/authenticationReducer";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <span className={styles.title}> Test APP </span>
            <ul className={styles.linkWrapper}>
                <li className={styles.block}>
                    <NavLink to='/ '>Главная</NavLink>
                </li>
                <li className={styles.block}>
                    <NavLink to="/posts">Новости</NavLink>
                </li>
                <li className={styles.block}>
                    <NavLink to="/profile">Профиль</NavLink>
                </li>
            </ul>
            <span className={styles.login}>
               <span>{props.username}</span>
                {props.isAuthentication && <button className={styles.button} onClick={props.logout}>X</button>}
            </span>
        </header>
    )
};

const mapStateToProps = (state) => ({
    username: state.authentication.username,
    isAuthentication: state.authentication.isAuthentication
});

export default connect(mapStateToProps, {logout})(Header);
