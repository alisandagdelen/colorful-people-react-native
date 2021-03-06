import React from 'react'
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform, FlatList } from 'react-native';
import styles from './styles';

export default class Home extends React.Component {

  sendMessage() {
    const { currentChatId, typing, currentUserEmail, otherUserEmail } = this.props;
    this.props.addMessage(currentChatId, typing, currentUserEmail, otherUserEmail);
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
        <FlatList inverted={true}
                  data={this.props.chatMessages}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.key}
        />
        <KeyboardAvoidingView behavior="padding"
                              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 80 }>
          <View style={styles.footer}>
            <TextInput
              autoFocus
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

