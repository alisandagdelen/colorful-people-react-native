import { Header, Container, Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import React from 'react';
import styles from './styles'

class Profile extends React.Component {

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}>

                <Content>
                    <List>

                        <View style={styles.logo}>
                            <Thumbnail large source={{ uri: 'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg' }} />
                        </View>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                <Input
                                    value={this.props.username}
                                    onChangeText={text => this.props.nickname(text)}
                                    placeholder={"Email Address"} />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input
                                    value={this.props.bio}
                                    onChangeText={text => this.props.bio(text)}
                                    placeholder={"bio"} />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button onPress={() => this.props.updated()}
                        style={styles.primaryButton} >
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>)
    }
}

export default Profile