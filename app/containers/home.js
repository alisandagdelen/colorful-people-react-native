import {connect} from 'react-redux'
import Home from '~/app/components/home/index'

function mapStateToProps(state) {
  return { movies: state.movies }
}

export default connect(mapStateToProps, null)(Home)
