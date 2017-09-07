import { connect } from 'react-redux';
import Home from '~/src/components/home/index';
import { bindActionCreators } from 'redux';
import { selectChat } from '~/src/actions/chats';


function mapStateToProps(state) {
  return {
    chats: state.chats
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    selectChat
  }, dispatch);
  return { ...actions, dispatch };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
