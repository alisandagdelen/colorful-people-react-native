import { connect } from 'react-redux';
import Chat from '~/src/components/chat/index';
import { bindActionCreators } from 'redux';
import { getChatMessages, addMessage, setTyping } from '~/src/actions/messages';


function mapStateToProps(state) {
  return {
    messages: state.messages,
    typing: state.typing
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ getChatMessages, addMessage, setTyping }, dispatch);
  return { ...actions, dispatch };
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat)
