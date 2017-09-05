import React from 'react'
import { View, Button, FlatList } from 'react-native';
import { selectChannel } from '~/src/actions/channels';
import styles from './styles';

export default class Home extends React.Component {

  static navigationOptions = { title: 'Colorful People' };

  renderItem({ item }) {
    const onButtonPressed = () => {
      this.props.dispatch(selectChannel(item.name));
      this.props.navigation.navigate('Message');
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
        <FlatList data={this.props.channels.data}
                  renderItem={this.renderItem.bind(this)}/>
      </View>
    );
  }
}

