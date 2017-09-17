import React from 'react'
import { FlatList } from 'react-native';
import { Container, Content, Header, Item, Input, Icon, Button, ListItem, Body, Text } from 'native-base';

export default class Home extends React.Component {

  renderItem({ item }) {
    const onButtonPressed = () => {
      this.props.selectChat(item.name);
      this.props.navigation.navigate('Chat');
    };

    return (
        <ListItem style={{ marginLeft: 0 }}
                  onPress={onButtonPressed}>
            <Body>
              <Text>{item.name}</Text>
            </Body>
        </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <FlatList data={Object.values(this.props.chats)}
                    renderItem={this.renderItem.bind(this)}/>
        </Content>
      </Container>
    );
  }
}

