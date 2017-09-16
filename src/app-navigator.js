import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import Home from '~/src/containers/home-container';
import Chat from '~/src/containers/chat-container';
import Login from '~/src/containers/login-container';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';


export default constAppNavigator = StackNavigator(
  {
    Login: {
      screen: withMappedNavigationProps(Login),
      navigationOptions: {title: 'Login'}
    },
    Home: {
      screen: withMappedNavigationProps(Home),
      navigationOptions: { title: 'Colorful People' }
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