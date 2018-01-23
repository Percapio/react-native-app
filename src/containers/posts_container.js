import { connect } from 'react-redux';

import PostsComponent from '../components/Posts/Posts';
import { getAllPosts } from '../actions/post_actions';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch( getAllPosts() )
});

export default connect(
  null,
  mapDispatchToProps
)(PostsComponent);