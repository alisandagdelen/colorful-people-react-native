import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';


export default ({user}) => {

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
