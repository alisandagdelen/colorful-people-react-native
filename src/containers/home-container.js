import { connect } from 'react-redux';
import Home from '../components/home/index';
import { bindActionCreators } from 'redux';
import { actions } from '../actions/index';
import { activeChatsSelector, otherUserEmailSelector } from "../selectors/chat-selector";


function mapStateToProps(state) {
  return {
    chats: activeChatsSelector(state),
    otherUserEmail: otherUserEmailSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectChat: actions.chat._selectChat
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
