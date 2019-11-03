import React from 'react';
import styles from './Post.module.css';

const PostElement = (props) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.title}>
                <h3>{props.title}</h3>
            </div>
            <div className={styles.content}>
                <p>{props.content}</p>
            </div>
        </section>
    )
};

export default PostElement;
