import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { post } = this.props;

    if(!post) return (
      <h3>Loading...</h3>
    );

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <Link to="/">
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        </Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect( mapStateToProps, { fetchPost, deletePost })(PostsShow);