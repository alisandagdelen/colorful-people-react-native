import configureStore from './store/configure-store';
import React from 'react'
import { Provider } from 'react-redux';
import AppNavigator from './navigations/app-navigator';
import { Root } from 'native-base';

console.ignoredYellowBox = ['Remote debugger'];
const store = configureStore();

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading/>;
    }

    return (
      <Provider store={store}>
        <Root>
          <AppNavigator/>
        </Root>
      </Provider>
    );
  }
}
