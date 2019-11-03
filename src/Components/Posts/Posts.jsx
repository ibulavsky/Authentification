import React, {Component} from 'react';
import styles from './Posts.module.css';
import PostElement from "./Post/PostElement";
import {connect} from "react-redux";
import {getPosts} from "../../BLL/postsReducer";

class Posts extends Component {

    componentDidMount() {
        this.props.getPosts(this.props.postsPage);
    }

    render() {
        let posts = this.props.posts.map((p) => <PostElement
            key={p.id}
            title={p.title}
            content={p.body}
        />);
        return (
            <section className={styles.wrapper}>
                <div>
                    {posts}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
        posts: state.posts.posts,
        postsPage: state.posts.postsPage
    }
);

export default connect(mapStateToProps, {getPosts})(Posts);
