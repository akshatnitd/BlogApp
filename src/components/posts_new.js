import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchPosts } from '../actions';
// import _ from 'lodash';

class PostsNew extends Component {

  // componentDidMount() {
  //   this.props.fetchPosts();
  // }

  // renderPosts = () => {
  //   return _.map(this.props.posts, post => {
  //     return(
  //       <li className="list-group-item" key={post.id}>
  //         {post.title}
  //       </li>
  //     );
  //   });
  // }

  render() {
    console.log(this.props.posts);
    return (
      <div>
          New Post!
      </div>
      );
    }
  }

  // function mapStateToProps(state) {
  //   return { posts: state.posts };
  // }

  export default PostsNew; // connect( mapStateToProps, { fetchPosts })(PostsIndex);