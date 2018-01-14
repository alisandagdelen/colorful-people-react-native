import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Profile from '../components/profile/index';
import { bindActionCreators } from 'redux';
import { actions } from '../actions/index';



function mapStateToProps(state) {
  return {
    nickname: state.profile.nickname,
    ppUrl: state.profile.ppUrl,
    colorId: state.profile.colorId,
    bio: state.profile.bio,
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    profileSelected: actions.profile.select,
    beginEditing: actions.profile.beginEditing,
    endEditing: actions.profile.endEditing,
    changeNickname: actions.profile.changeNickname,
  }, dispatch);
}


Profile.propTypes = {
  nickname: PropTypes.string.isRequired,
  ppUrl: PropTypes.string.isRequired,
  colorId: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,

  profileSelected: PropTypes.func,
  beginEditing: PropTypes.func.isRequired,
  endEditing: PropTypes.func.isRequired,
};




export default connect(mapStateToProps, mapDispatchToProps)(Profile)
