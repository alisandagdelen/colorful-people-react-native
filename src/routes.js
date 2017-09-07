import { StackNavigator, } from 'react-navigation';
import Home from '~/src/containers/home';
import Chat from '~/src/containers/chat';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

export default StackNavigator({
  Home: { screen: withMappedNavigationProps(Home) },
  Chat: { screen: withMappedNavigationProps(Chat) },
});