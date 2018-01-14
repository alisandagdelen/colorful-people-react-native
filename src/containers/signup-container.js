import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUp from '../components/signup/index';
import { bindActionCreators } from 'redux';
import { actions } from '../actions/index';
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
    signUp: actions.signUp.apply,
    changeUsername: actions.signUp.changeUsername,
    changePassword: actions.signUp.changePassword
  }, dispatch);
}


SignUp.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  authorized: PropTypes.bool.isRequired,

  signUp: PropTypes.func.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
