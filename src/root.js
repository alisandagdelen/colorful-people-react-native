import { Font } from 'expo';
import configureStore from './store/configure-store';
import React from 'react'
import { Provider } from 'react-redux';
import AppNavigator from './navigations/app-navigator';
import { Root } from 'native-base';
import { AsyncStorage } from 'react-native';
import { actions } from './actions';

console.ignoredYellowBox = ['Remote debugger'];
const store = configureStore();

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  // persist login
  async componentDidMount() {
    const userData = await AsyncStorage.getItem('userData');
    //const userData = null;

    if (userData) {
      const data = JSON.parse(userData);
      store.dispatch(actions.user.signInSuccess(data));
      store.dispatch(actions.user.fetchChats(data.chats));
      store.dispatch(actions.nav.resetToHome());
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
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
