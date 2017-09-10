import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import Home from '~/src/containers/home';
import Chat from '~/src/containers/chat';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';


export default StackNavigator(
  {
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