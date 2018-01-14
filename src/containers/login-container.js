import { connect } from 'react-redux';
import Login from '../components/login/index';
import { bindActionCreators } from 'redux';
import { actions } from '../actions/index';
import { authorizedSelector } from "../selectors/user-selector";
import { signInButtonTextSelector } from "../selectors/login-selector";


function mapStateToProps(state) {
  return {
    username: state.login.username,
    password: state.login.password,
    authorized: authorizedSelector(state),
    signInButtonText: signInButtonTextSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signIn: actions.login.apply,
    changeUsername: actions.login.changeUsername,
    changePassword: actions.login.changePassword
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
