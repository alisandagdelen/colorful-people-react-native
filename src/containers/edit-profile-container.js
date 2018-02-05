import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditProfile from '../components/edit-profile/index';
import { bindActionCreators } from 'redux';
import { actions } from '../actions/index';
import { nicknameSelector, ppUrlSelector, colorIdSelector, bioSelector } from "../selectors/profile-selector";



function mapStateToProps(state) {
  return {
    nickname: nicknameSelector(state),
    ppUrl: ppUrlSelector(state),
    colorId: colorIdSelector(state),
    bio: bioSelector(state),
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


EditProfile.propTypes = {
  nickname: PropTypes.string.isRequired,
  ppUrl: PropTypes.string.isRequired,
  colorId: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,

  profileSelected: PropTypes.func,
  beginEditing: PropTypes.func.isRequired,
  endEditing: PropTypes.func.isRequired,
};




export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
