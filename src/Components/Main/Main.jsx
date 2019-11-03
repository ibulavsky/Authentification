import React from 'react';
import styles from './Main.module.css';

const Main = (props) => {
    return (
        <section className={styles.wrapper}>
            <h1>
                ЗАГОЛОВОК
            </h1>
            <p>
                Здесь находится главная страница.
            </p>
        </section>
    )
};

export default Main;
