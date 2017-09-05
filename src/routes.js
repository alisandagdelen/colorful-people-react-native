import { StackNavigator, } from 'react-navigation';
import Home from '~/src/containers/home';
import Message from '~/src/containers/message';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

export default StackNavigator({
  Home: { screen: withMappedNavigationProps(Home) },
  Message: { screen: withMappedNavigationProps(Message) },
});