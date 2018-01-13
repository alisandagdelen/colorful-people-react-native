import { connect } from 'react-redux';
import Profile from '../components/login/index';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators/index';



function mapStateToProps(state) {
  return {
    nickname: state.profile.nickname,
    ppUrl: state.profile.ppUrl,
    colorId: state.profile.colorId,
    bio: state.profile.bio,
    updated :state.profile.bio
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    profileSelected: actions.profileSelected,
    beginEditing: actions.beginEditing,
    endEditing: actions.endEditing
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
