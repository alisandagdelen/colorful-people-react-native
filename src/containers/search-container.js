import { connect } from 'react-redux';
import Search from '~/src/components/search/index';
import { bindActionCreators } from 'redux';
import { actions } from '~/src/actions/index';
import { selectedColorSelector, colorIdSelector, foundUserSelector } from "~/src/selectors/search-selector";


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
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)
