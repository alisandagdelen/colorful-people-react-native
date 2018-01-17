import React from 'react'
import { FlatList } from 'react-native';
import { Container, Content, Header, Item, Input, Icon, List, Button, ListItem, Body, Text, Left, Thumbnail, Right } from 'native-base';

export default class Home extends React.Component {

  renderItem({ item }) {
    const onButtonPressed = () => {
      this.props.selectChat(item.uid, item.otherUserEmail);
      this.props.navigation.navigate('Chat');
    };


    return (
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'Image URL' }} />
          </Left>
          <Body>
          <Text>Kumar Pratik</Text>
          <Text note>chat 1</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
    );
  }

  render() {
    return (<Container>
      <Content>
        <List dataArray={Object.values(this.props.chats)}
          renderRow={this.renderItem.bind(this)}>
        </List>

      </Content>
    </Container>);
  }
}

