import { connect } from 'react-redux';
import Chat from '~/src/components/chat/index';
import { bindActionCreators } from 'redux';
import { addMessage, setTyping } from '~/src/actions/messages';
import { currentChatMessagesSelector, messagesSelector } from "~/src/selectors/messages-selector";
import { currentUserSelector } from "~/src/selectors/users-selector";


function mapStateToProps(state) {
  return {
    chatMessages: currentChatMessagesSelector(state),
    messages: messagesSelector(state),
    typing: state.messages.typing,
    currentChat: state.chats.currentChat,
    currentUser: currentUserSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMessage, setTyping }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat)
