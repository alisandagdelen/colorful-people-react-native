import { connect } from 'react-redux';
import Home from '~/src/components/home/index';
import { bindActionCreators } from 'redux';
import { actions } from '~/src/actions/index';
import { activeChatsSelector } from "~/src/selectors/chat-selector";


function mapStateToProps(state) {
  return {
    chats: activeChatsSelector(state)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectChat: actions.chat._selectChat
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
