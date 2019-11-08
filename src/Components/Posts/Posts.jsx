import React, {Component} from 'react';
import styles from './Posts.module.css';
import PostElement from "./Post/PostElement";
import {connect} from "react-redux";
import {getPosts, nextPage} from "../../BLL/postsReducer";

class Posts extends Component {

    componentDidMount() {
        this.props.getPosts(this.props.postsPage);
    }

    onScroll = (e) => {
        const div = e.currentTarget;
        // debugger
        if ((Math.ceil(div.scrollTop + 1)) >= (div.scrollHeight - div.offsetHeight)) {
            div.scrollTop = div.scrollHeight;
            this.props.nextPage();
            this.props.getPosts(this.props.postsPage);
            console.log('scroll');
        }
    };

    render() {
        let posts = this.props.posts.map((p) => <PostElement
            key={p.id}
            title={p.title}
            content={p.body}
        />);
        return (
            <section className={styles.wrapper}>
                <div onScroll={this.onScroll}
                     style={{position: 'absolute', height: '100%', overflowY: 'scroll', width: '100%'}}>
                    {posts}
                </div>
            </section>
        )
    }
}

const
    mapStateToProps = (state) => ({
            posts: state.posts.posts,
            postsPage: state.posts.postsPage
        }
    );

export default connect(mapStateToProps, {getPosts, nextPage})(Posts);
