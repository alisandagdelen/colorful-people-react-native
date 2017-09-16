import { connect } from 'react-redux';
import Login from '~/src/components/login2/index';
import { bindActionCreators } from 'redux';
import { actions } from '~/src/actions/index';


function mapStateToProps(state) {
  return {
    users: state.users,
    username: state.login.username,
    password: state.login.password,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signIn: actions.user.signIn,
    changeUsername: actions.login.changeUsername,
    changePassword: actions.login.changePassword
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
