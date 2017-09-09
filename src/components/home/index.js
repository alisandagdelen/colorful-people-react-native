import React from 'react'
import { View, Button, FlatList } from 'react-native';
import styles from './styles';

export default class Home extends React.Component {

  static navigationOptions = { title: 'Colorful People' };

  renderItem({ item }) {
    const onButtonPressed = () => {
      this.props.selectChat(item.name);
      this.props.navigation.navigate('Chat');
    };


    return (
      <View style={styles.row}>
        <Button title={item.name}
                style={styles.button}
                onPress={onButtonPressed}>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={Object.values(this.props.chats.data)}
                  renderItem={this.renderItem.bind(this)}/>
      </View>
    );
  }
}

