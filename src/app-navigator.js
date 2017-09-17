import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '~/src/containers/home-container';
import Chat from '~/src/containers/chat-container';
import Login from '~/src/containers/login-container';
import Signup from '~/src/containers/signup-container';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';


export const AppNavigator = StackNavigator(
  {
    Login: {
      screen: withMappedNavigationProps(Login),
      navigationOptions: { title: 'Login' }
    },
    Signup: {
      screen: withMappedNavigationProps(Signup),
      navigationOptions: { title: 'Signup' }
    },
    Home: {
      screen: withMappedNavigationProps(Home),
      navigationOptions: { header: null }
    },
    Chat: {
      screen: withMappedNavigationProps(Chat),
      navigationOptions: { title: 'Messages' }
    },
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);