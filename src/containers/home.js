import { connect } from 'react-redux';
import Home from '~/src/components/home/index';
import { bindActionCreators } from 'redux';
import { getConvesation } from "~/src/actions/channels";


function mapStateToProps(state) {
  return {
    channels: state.channels
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    getConvesation
  }, dispatch);
  return { ...actions, dispatch };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
