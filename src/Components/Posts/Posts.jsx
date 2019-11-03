import React from 'react';
import styles from './Posts.module.css';
import PostElement from "./Post/PostElement";
import {connect} from "react-redux";

const Posts = (props) => {
    let posts = props.posts.map((p) => <PostElement
        title={p.title}
        content={p.body}
    />);
    return (
        <section className={styles.wrapper}>
            <p>
                {posts}
            </p>
        </section>
    )
};

const mapStateToProps = (state) => ({
        posts: state.posts.posts
    }
);

export default connect(mapStateToProps, null)(Posts);
