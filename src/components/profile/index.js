// import { Header, Container, Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
// import React from 'react';

// class Profile extends React.Component {

//   render() {
//     return (
//       <Container style={{backgroundColor: 'white'}}>

//         <Content>
//           <List>
//             <ListItem>
//               <InputGroup>
//                 <Icon name="ios-person" style={{ color: '#0A69FE' }} />
//                 <Input
//                   value={this.props.username}
//                   onChangeText={text => this.props.changeUsername(text)}
//                   placeholder={"Email Address"} />
//               </InputGroup>
//             </ListItem>
//             <ListItem>
//               <InputGroup>
//                 <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
//                 <Input
//                   value={this.props.password}
//                   onChangeText={text => this.props.changePassword(text)}
//                   secureTextEntry={true}
//                   placeholder={"Password"} />
//               </InputGroup>
//             </ListItem>
//           </List>
//           <Button onPress={() => this.props.signIn(this.props.username, this.props.password)}
//                   style={styles.primaryButton} >
//             <Text>Login</Text>
//           </Button>
//           <Button onPress={() => this.props.navigation.navigate('Signup')} style={styles.primaryButton}>
//             <Text>New to here?</Text>
//           </Button>
//         </Content>
//       </Container>)
//   }
// }

// export default Profile