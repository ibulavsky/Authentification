import React from 'react';
import styles from './Login.module.css';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {falseAuthentication, login} from "../../BLL/authenticationReducer";

class Login extends React.Component {
    state = {
        login: '',
        password: '',
    };

    onLoginChanged = (e) => {
        // зачищаю ошибку, может есть лучшее решение
        this.props.falseAuthentication(false);
        this.setState({
            login: e.currentTarget.value
        });
    };

    onPasswordChanged = (e) => {
        // зачищаю ошибку, может есть лучшее решение
        this.props.falseAuthentication(false);
        this.setState({
            password: e.currentTarget.value
        });
    };

    onSubmit = () => {
        this.props.login(this.state.login, this.state.password);
        this.setState({
            login: '',
            password: ''
        });
    };

    render() {
        if (this.props.isAuthentication) {
            return <Redirect to={"/profile"}/>
        } else {
            return <div className={styles.wrapper}>
                <h2>Форма входа</h2>
                <div className={styles.forms}>
                    <div className={styles.form}>
                        <span>Логин: </span>
                        <input type={"login"} placeholder={'Имя пользователя'}
                               value={this.state.login}
                               onChange={this.onLoginChanged}/>
                    </div>
                    <div className={styles.form}>
                        <span>Пароль: </span>
                        <input type={"password"} placeholder={'Пароль'}
                               value={this.state.password}
                               onChange={this.onPasswordChanged}/>
                    </div>
                    {this.props.authenticationError && <mark>Имя пользователя или пароль введены не верно.</mark>}
                    <button className={styles.button} onClick={this.onSubmit}>Войти</button>
                </div>
            </div>
        }
    }
}

const mapStateToProps = (state) => ({
    isAuthentication: state.authentication.isAuthentication,
    authenticationError: state.authentication.authenticationError,
});

export default connect(mapStateToProps, {
    login, falseAuthentication
})(Login);
