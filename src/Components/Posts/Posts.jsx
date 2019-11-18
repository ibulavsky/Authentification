import React, {Component} from 'react';
import styles from './Posts.module.css';
import PostElement from "./Post/PostElement";
import {connect} from "react-redux";
import {getPosts, nextPage} from "../../BLL/postsReducer";

class Posts extends Component {

    componentDidMount() {
        this.props.getPosts(this.props.postsPage);
        // this.props.nextPage();
    }

    onScroll = (e) => {
        const div = e.currentTarget;
        if ((div.offsetHeight + Math.ceil(div.scrollTop)) >= div.scrollHeight) {
            this.props.getPosts(this.props.postsPage);
            // div.scrollTop = div.scrollHeight;
        }
    };

    render(props) {
        let posts = this.props.posts.map((p) => <PostElement
            key={p.id + Math.random()}
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
