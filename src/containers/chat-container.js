import { connect } from 'react-redux';
import Chat from '../components/chat/index';
import { bindActionCreators } from 'redux';
import { actions } from '../actions/index';
import { currentChatMessagesSelector, messagesSelector, typingSelector } from "../selectors/message-selector";
import { currentUserUidSelector, currentUserEmailSelector } from "../selectors/user-selector";
import { currentChatIdSelector, otherUserEmailSelector } from "../selectors/chat-selector";


function mapStateToProps(state) {
  return {
    chatMessages: currentChatMessagesSelector(state),
    messages: messagesSelector(state),
    typing: typingSelector(state),
    currentChatId: currentChatIdSelector(state),
    currentUserUid: currentUserUidSelector(state),
    currentUserEmail: currentUserEmailSelector(state),
    otherUserEmail: otherUserEmailSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addMessage: actions.message.addMessage,
      setTyping: actions.message.setTyping
    },
    dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat)
