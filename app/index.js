import configureStore from '~/store/configure-store';
import React from 'react'
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {send, subscribe} from 'react-native-training-chat-server';
import ReversedFlatList from 'react-native-reversed-flat-list';
import Header from '~/app/header';

const NAME = 'İsimr';
const CHANNEL = 'Reactivate';

const store = configureStore();

export default class App extends React.Component {

  state = {
    typing: "",
    messages: [],

  };

  componentDidMount() {
    subscribe(CHANNEL, messages => {
      this.setState({messages});
    });
  }

  async sendMessage() {
    // send message to our channel, with sender name.
    // the `await` keyword means this function execution
    // waits until the message is sent
    await send({
      channel: CHANNEL,
      sender: NAME,
      message: this.state.typing
    });

    // set the component state (clears text input)
    this.setState({
      typing: '',
    });
  }

  renderItem({item}) {
    return (
      <View style={styles.row}>
        <View style={styles.rowText}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header title={CHANNEL} />
          <ReversedFlatList data={this.state.messages} renderItem={this.renderItem} />
          <KeyboardAvoidingView behavior="padding">
            <View style={styles.footer}>
              <TextInput
                value={this.state.typing}
                onChangeText={text => this.setState({typing: text})}
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Type something nice"
              />
              <TouchableOpacity onPress={this.sendMessage.bind(this)}>
                <Text style={styles.send}>Send</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  rowText: {
    flex: 1,
  },
});
