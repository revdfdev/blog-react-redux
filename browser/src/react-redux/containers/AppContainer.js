import React from 'react';
import {connect} from 'react-redux';

import Navigation from '../components/Navigation';
import PostContainer from './PostContainer';
import FooterContainer from './FooterContainer';

import Login from '../components/Login';
import Logout from '../components/Logout';
import Register from '../components/Register';
import CreatePost from '../components/CreatePost';

// actions
import {createPost} from '../reducers/post';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createPost = props.createPost.bind(this);
  }

  render() {
    return(
      <div>
        {/*<Navigation />
        // <PostContainer />
        <FooterContainer />*/}
        <PostContainer posts={this.props.posts} />
        <Login />
        <Logout />
        <Register />
        <CreatePost createPost={this.createPost} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (post) =>
     dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
