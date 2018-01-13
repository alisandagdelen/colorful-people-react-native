import { Header, Container, Title, View, Thumbnail, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import React from 'react';
import styles from './styles'

class Login extends React.Component {

  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>

        <Content>
          <View style={ styles.logo }>
            <Thumbnail large source={{uri: 'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg'}} />        
          </View>
          <List>
            <ListItem>
              <InputGroup>
                <Input
                  onChangeText={text => this.props.changeUsername(text)}
                  placeholder={"Email Address"} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input
                  onChangeText={text => this.props.changePassword(text)}
                  secureTextEntry={true}
                  placeholder={"Password"} />
              </InputGroup>
            </ListItem>
          </List>
          <Button onPress={() => this.props.signIn(this.props.username, this.props.password)}
                  style={ styles.primaryButton }
                  primary
                  block
          >
            <Text>Sign In</Text>
          </Button>


          <Button onPress={() => this.props.signIn(this.props.username, this.props.password)}
                  style={ styles.facebookButton }
                  primary
                  block
          >
            <Text>Facebook Login</Text>
          </Button>


          <Text style={ styles.footerText }>Don't Have an Account</Text>



          <Button onPress={() => this.props.navigation.navigate('Signup')}
            transparent
            dark
            style={styles.signUp}>
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </Container>)
  }
}

export default Login