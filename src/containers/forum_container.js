import { connect } from 'react-redux';

import ForumComponent from '../components/Forum/Forum';
import { getAllThreads } from '../actions/threads_actions';

const mapDispatchToProps = dispatch => ({
  getAllThreads: params => dispatch( getAllThreads( params ) )
});

export default connect(
  null,
  mapDispatchToProps
)(ForumComponent);