import React from 'react'
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import ReversedFlatList from 'react-native-reversed-flat-list';
import styles from './styles';
import firebase from '~/firebase/index';

export default class Home extends React.Component {

  static navigationOptions = { title: 'Messages', };

  sendMessage() {
    this.props.addMessage(this.props.currentChat, this.props.typing, this.props.currentUser)
  }

  renderItem({item}) {
    return (
      <View style={styles.row} key={item.id}>
        <View style={styles.rowText}>
          <Text style={styles.sender}>{item.sender}</Text>
          <Text style={styles.message}>{item.content}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ReversedFlatList data={this.props.chatMessages} renderItem={this.renderItem} />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.props.typing}
              onChangeText={text => this.props.setTyping(text)}
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
    );
  }
}

