import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import js from '../../media/js.png'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>
                <img src={js} alt='logo'/>
            </span>
            <span className={styles.linkWrapper}>
                 <li className={styles.block}>
                <NavLink to='/ '>Main</NavLink>
            </li>
            <li className={styles.block}>
                <NavLink to="/posts">News</NavLink>
            </li>
            <li className={styles.block}>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            </span>
            <span className={styles.login}>
                {props.login}
            </span>
        </header>
    )
};

export default Header;
