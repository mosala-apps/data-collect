import React from 'react';
import { View, Text } from 'react-native';
import styleSheet from './index.style';

function CardHome({ title }) {
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.containerText}>{title}</Text>
    </View>
  );
}

export default CardHome;
