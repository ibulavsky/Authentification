import React from 'react';
import styles from './Login.module.css';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    if (props.isAuthentication) {
        return <Redirect to={"/profile"}/>
    } else {
        return <div className={styles.wrapper}>
            <h2>Форма входа</h2>
            <div className={styles.forms}>
                <div className={styles.form}>
                    <span>Логин: </span>
                    <input type={"login"} placeholder={'Имя пользователя'}/>
                </div>
                <div className={styles.form}>
                    <span>Пароль: </span>
                    <input type={"password"} placeholder={'Пароль'}/>
                </div>
                {props.authenticationError && <mark>Имя пользователя или пароль введены не верно.</mark>}
                <button className={styles.button}> Войти</button>
            </div>
        </div>
    }
};

const mapStateToProps = (state) => ({
    isAuthentication: state.authentication.isAuthentication,
    authenticationError: state.authentication.authenticationError,
});

export default connect(mapStateToProps)(Login);
