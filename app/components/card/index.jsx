import React from 'react';
import {
  Platform, View, Text, TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import styleSheet from './index.style';

function CardHome({ title, onPress }) {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
    >
      <View style={styleSheet.container}>
        <Text style={styleSheet.containerText}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default CardHome;

CardHome.defaultProps = {
  onPress: () => null,
};

CardHome.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};
