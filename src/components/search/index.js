import { Header, View, Container, Content, Input, Icon, Item } from 'native-base';
import React from 'react';
import styles from './styles';
import ColorCheckBox from './color-checkbox';
import UserCard from './user-card';

class Search extends React.Component {

  selectColor(color) {
    this.props.selectColor(color);
    setImmediate(() => { this.searchInput._root.focus() });
  }

  enterCharacter(text) {
    this.props.changeColorId(text);
    setImmediate(() => { this.searchInput._root.blur() });
  }

  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>

        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input blurOnSubmit={false}
                   autoCapitalize='none'
                   onChangeText={(text) => this.enterCharacter(text)}
                   autoCorrect={false}
                   ref={input => this.searchInput = input }
                   placeholder="Enter Color Id"
            />
          </Item>
        </Header>

        <Content>
          <View style={styles.colorButtonsView}>
            <ColorCheckBox color="blue" selectColor={this.selectColor.bind(this)} selectedColor={this.props.selectedColor}/>
            <ColorCheckBox color="red" selectColor={this.selectColor.bind(this)} selectedColor={this.props.selectedColor}/>
            <ColorCheckBox color="black" selectColor={this.selectColor.bind(this)} selectedColor={this.props.selectedColor}/>
            <ColorCheckBox color="purple" selectColor={this.selectColor.bind(this)} selectedColor={this.props.selectedColor}/>
            <ColorCheckBox color="green" selectColor={this.selectColor.bind(this)} selectedColor={this.props.selectedColor}/>
            <ColorCheckBox color="orange" selectColor={this.selectColor.bind(this)} selectedColor={this.props.selectedColor}/>
            <ColorCheckBox color="yellow" selectColor={this.selectColor.bind(this)} selectedColor={this.props.selectedColor}/>
          </View>

          <UserCard startChat={this.props.startChat} user={this.props.foundUser}/>

        </Content>

      </Container>)
  }
}

export default Search