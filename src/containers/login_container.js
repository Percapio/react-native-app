import { connect } from 'react-redux';

import LoginComponent from '../components/Login/Login';
import { sendLogin } from '../actions/login_actions';

const mapDispatchToProps = dispatch => ({
  sendLogin: credentials => dispatch( sendLogin( credentials ))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginComponent);