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

class Profile extends React.Component {


  render() {
    return (
      <Container style={globalStyles.container}>

        <Content>
          <List>
            <View style={styles.logo}>
              <Thumbnail large
                source={{ uri: this.props.ppUrl }} />
            </View>

            <Text style={{ fontSize: 22, alignSelf: 'center', color: this.props.colorId, fontWeight: 'bold' }}>
              {this.props.nickname}
            </Text>

            <View style={{ width: 600, height: 1, backgroundColor: 'mediumpurple' }} />

            <Text style={styles.titleText}>
              {'\n'} About Me
            </Text>

            <Text style={styles.bioText}>
              {this.props.bio}
            </Text>
          </List>

          <Button onPress={() => this.props.updated()}
            style={{ marginTop: 40, width: '80%', alignSelf: 'center', justifyContent: 'center', backgroundColor: this.props.colorId }}>
            <Text>Edit Profile</Text>
          </Button>

        </Content>
      </Container>)
  }
}

export default Profile