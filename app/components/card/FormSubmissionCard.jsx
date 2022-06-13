import React from 'react'
import { View, Text,SafeAreaView } from 'react-native';
import { Card, Button, } from 'react-native-paper';

function FormSubmissionCard() {
  return (
    <Card style={{ borderWidth:0.1, paddingVertical:'2%'}}>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
  )
}

export default FormSubmissionCard


