import React from 'react'
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { getChannelMessages } from '~/src/actions/messages';
import ReversedFlatList from 'react-native-reversed-flat-list';
import styles from './styles';

export default class Home extends React.Component {

  static navigationOptions = { title: 'Messages', };

  componentDidMount() {
    this.props.getChannelMessages(this.props.messages.currentChannel);
  }

  renderItem({item}) {
    return (
      <View style={styles.row} key={item.id}>
        <View style={styles.rowText}>
          <Text style={styles.sender}>{item.from}</Text>
          <Text style={styles.message}>{item.content}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ReversedFlatList data={this.props.messages.currentData} renderItem={this.renderItem} />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.props.typing}
              onChangeText={text => this.setState({typing: text})}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Type something nice"
            />
            <TouchableOpacity>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

