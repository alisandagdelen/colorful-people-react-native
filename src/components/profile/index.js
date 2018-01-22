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
    const s = styles(this.props);

    return (
      <Container style={globalStyles.container}>
        <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>

          <List>
            <View style={s.logo}>
              <Thumbnail large
                source={{ uri: this.props.ppUrl }} />
            </View>

            <Text style={s.nicknameText}>
              {this.props.nickname}
            </Text>

            <View style={s.seperatorView} />

            <Text style={s.titleText}>
              {'\n'} About Me
            </Text>

            <Text style={s.bioText}>
              {this.props.bio}
            </Text>
          </List>
          <View style={styles.buttonsContainer}>
            <Button onPress={() => this.props.updated()}
              style={s.editButton}>
              <Text>Edit Profile</Text>
            </Button>

            <Button onPress={() => this.props.updated()}
              style={s.logoutButton}>
              <Text>Logout</Text>
            </Button>
          </View>

        </Content>
      </Container>)
  }
}

export default Profile