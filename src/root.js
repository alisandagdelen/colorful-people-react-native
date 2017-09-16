import configureStore from '~/src/store/configure-store';
import React from 'react'
import { Provider } from 'react-redux';
import AppNavigator from '~/src/app-navigator';

const store = configureStore();

export default class extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}
