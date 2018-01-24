import { connect } from 'react-redux';

import IndexComponent from '../components/Index/Index';
import { getAllForums } from '../actions/forums_actions';

const mapStateToProps = state => ({
  forums: state.forums
});

const mapDispatchToProps = dispatch => ({
  getAllForums: () => dispatch( getAllForums() )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexComponent);