import { connect } from 'react-redux';
import Login from '~/src/components/login/index';
import { bindActionCreators } from 'redux';
import { actions } from '~/src/actions/index';
import { authorizedSelector } from "../selectors/user-selector";


function mapStateToProps(state) {
  return {
    username: state.login.username,
    password: state.login.password,
    authorized: authorizedSelector(state),
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
