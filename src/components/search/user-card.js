import React from 'react';
import { Card, CardItem, Body, Text, Button } from 'native-base';
import styles from './styles';


export default ({user, startChat}) => {

  if (!user) {
    return (
      <CardItem header>
        <Text>No one yet...</Text>
      </CardItem>
    )
  }


  return (
    <Card>
      <CardItem header>
        <Text>Found someone! :)</Text>
        <Button border success onPress={() => startChat(user.uid, user.email)}
                style={styles.button} >
          <Text>Start Chat!</Text>
        </Button>
      </CardItem>
      <CardItem>
        <Body>
        <Text>
          {user.email}
        </Text>
        </Body>
      </CardItem>

    </Card>
  );
}
