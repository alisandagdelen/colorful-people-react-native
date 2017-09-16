import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import firebase from '~/firebase/index';
import { googleProvider } from '~/firebase/auth';
import Button from './button'
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

const onPress = async () => {
  try {
    FBLoginManager.loginWithPermissions(['email'], (err, data) => {
      console.log(arguments)
    });
  }
  catch (err) {
    console.log(err)
  }
};

// const Container = (props) => {
//   return (
//     <ScrollView style={styles.scroll}>
//       <View style={styles.labelContainer}>
//         <Button
//           label="Google Login"
//           styles={{button: styles.alignRight, label: styles.label}}
//           onPress={onPress}
//         />
//         { props.children }
//       </View>
//     </ScrollView>
//   );
// }

class Login extends React.Component {
  render() {
    var _this = this;
    return (
      <FBLogin style={{ marginBottom: 10, }}
               ref={(fbLogin) => { this.fbLogin = fbLogin }}
               permissions={["email","user_friends"]}
               loginBehavior={FBLoginManager.LoginBehaviors.Native}
               onLogin={function(data){
                 console.log("Logged in!");
                 console.log(data);
                 _this.setState({ user : data.credentials });
               }}
               onLogout={function(){
                 console.log("Logged out.");
                 _this.setState({ user : null });
               }}
               onLoginFound={function(data){
                 console.log("Existing login found.");
                 console.log(data);
                 _this.setState({ user : data.credentials });
               }}
               onLoginNotFound={function(){
                 console.log("No user logged in.");
                 _this.setState({ user : null });
               }}
               onError={function(data){
                 console.log("ERROR");
                 console.log(data);
               }}
               onCancel={function(){
                 console.log("User cancelled.");
               }}
               onPermissionsMissing={function(data){
                 console.log("Check permissions!");
                 console.log(data);
               }}
      />
    );
  }
};

export default Login;