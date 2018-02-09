import React from 'react'
import {
  View,
  Container,
  Content,
  Item,
  Input,
  Icon,
  List,
  ListItem,
  Badge,
  Text,
  Left,
  Thumbnail,
  Right
} from 'native-base';
import globalStyles from '../globals/styles'
import styles from './styles';


export default class Home extends React.Component {


  renderItem(item) {
    const messageSection = () => (
      <View style={styles.messageSection}>
        <Text style={styles.nickname}>{item.name}</Text>
        <Text note>{item.lastMessage ? item.lastMessage.substr(0, 30) : ''}</Text>
      </View>
    );

    const onButtonPressed = () => {
      this.props.selectChat(item.uid, item.otherUserEmail);
      this.props.navigation.navigate('Chat');
    };

    return (
      <ListItem style={styles.listItem} onPress={onButtonPressed}>
        <Left>
          <Thumbnail style={styles.avatar}
                     source={{ uri: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=90&q=70' }}
          />
          {messageSection()}
        </Left>
        <Right style={styles.rightSection}>
          <Badge style={styles.badge} success>
            <Text>1</Text>
          </Badge>
          <Text note style={styles.lastMessageTime}>{
            item.lastMessageTime &&
            new Date(item.lastMessageTime).getHours() + ': ' +
            new Date(item.lastMessageTime).getMinutes()
          }</Text>
        </Right>
      </ListItem>
    );
  }

  render() {
    return (
      <Container style={globalStyles.container}>
        <Content>
          <List dataArray={Object.values(this.props.chats)}
                renderRow={this.renderItem.bind(this)}>
          </List>
        </Content>
      </Container>
    );
  }
}

