import { connect } from 'react-redux';
import Chat from '~/src/components/chat/index';
import { bindActionCreators } from 'redux';
import { addMessage, setTyping } from '~/src/actions/messages';
import { currentChatMessagesSelector } from "~/src/selectors/messages";


function mapStateToProps(state) {
  return {
    chatMessages: currentChatMessagesSelector(state),
    messages: state.messages.data,
    typing: state.messages.typing,
    currentChat: state.chats.currentChat,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMessage, setTyping }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat)
