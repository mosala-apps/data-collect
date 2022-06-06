import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styleSheet from './index.style';

function CardHome({ title, recurrence }) {
  return (
    <TouchableHighlight style={styleSheet.container}>
      <View>
        <Text style={styleSheet.containerText}>{title}</Text>
        <Text style={styleSheet.containerTextRecurrence}>{recurrence}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default CardHome;
