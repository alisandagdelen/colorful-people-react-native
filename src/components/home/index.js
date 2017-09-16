import React from 'react'
import { FlatList } from 'react-native';
import { Container, Content, Header, Item, Input, Icon, Button, ListItem, Body, Text } from 'native-base';
import styles from './styles';

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
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Enter Color Id" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <FlatList data={Object.values(this.props.chats.data)}
                    renderItem={this.renderItem.bind(this)}/>
        </Content>
      </Container>
    );
  }
}

