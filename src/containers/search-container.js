import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from '../components/search/index';
import { bindActionCreators } from 'redux';
import { actions } from '../actions/index';
import { selectedColorSelector, colorIdSelector, foundUserSelector } from "../selectors/search-selector";


function mapStateToProps(state) {
  return {
    selectedColor: selectedColorSelector(state),
    colorId: colorIdSelector(state),
    colors: state.color,
    foundUser: foundUserSelector(state),
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectColor: actions.search.selectColor,
    changeColorId: actions.search.changeColorId,
    startChat: actions.search.startChat,
  }, dispatch);
}


Search.propTypes = {
  selectedColor: PropTypes.string,
  colorId: PropTypes.string,
  colors: PropTypes.object,
  foundUser: PropTypes.object,

  selectColor: PropTypes.func.isRequired,
  changeColorId: PropTypes.func.isRequired,
  startChat: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)
