import React from 'react';
import styles from './Profile.module.css';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if (props.isAuthentication) {
        return (
            <section className={styles.wrapper}>
                <b>Профиль</b>
                <p>
                    Здесь находится страница профиля.
                </p>
            </section>
        )
    } else {
        return <Redirect to={"/login"}/>
    }
};

const mapStateToProps = (state) => ({
    isAuthentication: state.authentication.isAuthentication
});

export default connect(mapStateToProps, null)(Profile);
