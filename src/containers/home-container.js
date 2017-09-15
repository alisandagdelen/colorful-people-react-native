import { connect } from 'react-redux';
import Home from '~/src/components/home/index';
import { bindActionCreators } from 'redux';
import { actions } from '~/src/actions/index';


function mapStateToProps(state) {
  return {
    chats: state.chats
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectChat: actions.chat._selectChat
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
