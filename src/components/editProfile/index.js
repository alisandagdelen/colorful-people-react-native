import {
    View,
    Thumbnail,
    Header,
    Container,
    Title,
    Content,
    List,
    ListItem,
    InputGroup,
    Input,
    Icon,
    Text,
    Picker,
    Button
  } from 'native-base';
  import React from 'react';
  import styles from './styles';
  import globalStyles from '../globals/styles';
  
  class EditProfile extends React.Component {
  
  
    render() {
      const s = styles(this.props);
  
      return (
        <Container style={globalStyles.container}>
          <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
  
            <List>
              <View style={s.logo}>
                <Thumbnail large
                  source={{ uri: this.props.ppUrl }} />
              </View>
  
              <InputGroup>
                  <Input
                    style = {s.nicknameText}
                    value = {this.props.nickname}
                    onChangeText={text => this.props.changeNickname(text)}
                    placeholder={"Nickname"}/>
                </InputGroup>
  
              <View style={s.seperatorView} />
  
              <Text style={s.titleText}>
                {'\n'} About Me
              </Text>

              <InputGroup>
                  <Input
                    style = {s.bioText}
                    value = {this.props.bio}
                    editable = {true}
                    multiline = {true}
                    placeholder={"Bio"}/>
                </InputGroup>

            </List>
            <View style={styles.buttonsContainer}>
              <Button onPress={() => this.props.endEditing()}
                style={s.editButton}>
                <Text>Save</Text>
              </Button>
            </View>
  
          </Content>
        </Container>)
    }
  }
  
  export default EditProfile