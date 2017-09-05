import { connect } from 'react-redux';
import Message from '~/src/components/message/index';
import { bindActionCreators } from 'redux';
import { getChannelMessages, addMessage } from "~/src/actions/messages";


function mapStateToProps(state) {
  return {
    messages: state.messages,
    typing: state.typing
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ getChannelMessages, addMessage }, dispatch);
  return { ...actions, dispatch };
}


export default connect(mapStateToProps, mapDispatchToProps)(Message)
