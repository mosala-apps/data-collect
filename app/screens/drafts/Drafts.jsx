import React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { Card, Button, } from 'react-native-paper';


export default function Drafts() {
  return (
    <SafeAreaView>
      <Text>on va faire un test</Text>
      <Card style={{ borderWidth:0.1, paddingVertical:'2%'}}>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
}
