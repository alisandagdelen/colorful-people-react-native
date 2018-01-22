import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chat from '../containers/chat-container';
import Login from '../containers/login-container';
import Signup from '../containers/signup-container';
import Profile from '../containers/profile-container';
import EditProfile from '../containers/editProfile-container';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import HomeNavigator from './home-navigatior'


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
      screen: withMappedNavigationProps(HomeNavigator),
      navigationOptions: { header: null }
    },
    Chat: {
      screen: withMappedNavigationProps(Chat),
      navigationOptions: { title: 'Messages' }
    },
    EditProfile: {
      screen: withMappedNavigationProps(EditProfile),
      navigationOptions: { title: 'EditProfile' }
    }
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