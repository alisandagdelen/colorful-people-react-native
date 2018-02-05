import React from 'react'
import {
  Container,
  Content,
  Header,
  Item,
  Input,
  Icon,
  List,
  Button,
  ListItem,
  Body,
  Text,
  Left,
  Thumbnail,
  Right
} from 'native-base';
import globalStyles from '../globals/styles'
import styles from './styles';

export default class Home extends React.Component {

  renderItem(item) {
    const onButtonPressed = () => {
      this.props.selectChat(item.uid, item.otherUserEmail);
      this.props.navigation.navigate('Chat');
    };

    return (
      <ListItem avatar onPress={onButtonPressed}>
        <Left>
          <Thumbnail style={styles.avatar}
                     source={{ uri: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=90&q=70' }}/>
        </Left>
        <Body>
          <Text>{item.name}</Text>
          <Text note>chat 1</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
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

