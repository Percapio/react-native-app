import { connect } from 'react-redux';

import ThreadComponent from '../components/Thread/Thread';
import { getThread } from '../actions/threads_actions';

const mapDispatchToProps = dispatch => ({
  getThread: ( params ) => dispatch( getThread( params ) )
});

export default connect(
  null,
  mapDispatchToProps
)(ThreadComponent);