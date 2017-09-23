import { connect } from 'react-redux';
import Chat from '../components/chat/index';
import { bindActionCreators } from 'redux';
import { actions } from '../actions/index';
import { currentChatMessagesSelector, messagesSelector, typingSelector } from "../selectors/message-selector";
import { currentUserUidSelector, currentUserEmailSelector } from "../selectors/user-selector";
import { currentChatSelector } from "../selectors/chat-selector";


function mapStateToProps(state) {
  return {
    chatMessages: currentChatMessagesSelector(state),
    messages: messagesSelector(state),
    typing: typingSelector(state),
    currentChat: currentChatSelector(state),
    currentUserUid: currentUserUidSelector(state),
    currentUserEmail: currentUserEmailSelector(state),
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
