import { connect } from 'react-redux';

import ThreadsComponent from '../components/Threads/Threads';
import { getAllThreads } from '../actions/thread_actions';

const mapStateToProps = state => ({
  threads: state.threads
});

const mapDispatchToProps = dispatch => ({
  getAllThreads: () => dispatch( getAllThreads() )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadsComponent);