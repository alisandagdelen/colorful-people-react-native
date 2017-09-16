import { connect } from 'react-redux';
import Login from '~/src/components/login/index';
import { bindActionCreators } from 'redux';
import { actions } from '~/src/actions/index';
import { authorizedSelector } from "../selectors/user-selector";


function mapStateToProps(state) {
  return {
    username: state.signUp.username,
    password: state.signUp.password,
    authorized: authorizedSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signIn: actions.user.signIn,
    changeUsername: actions.signUp.changeUsername,
    changePassword: actions.signUp.changePassword
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
