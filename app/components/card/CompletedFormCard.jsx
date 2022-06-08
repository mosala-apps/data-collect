import React, { useMemo } from 'react'
import PropTypes from 'prop-types';
import styleSheet from './CompletedFormCard.style';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

function CompletedFormCard ({completedForm}) {
  const createdManagerNameAvatar = useMemo(() => {
    return completedForm.created_manager_name ? completedForm.created_manager_name[0] : '-'
  }, [completedForm])
  return (
    <View style={styleSheet.card}>
      <View style={{flex: 1}}>
        <View style={styleSheet.avatar}>
          <Text style={styleSheet.avatarText}>{createdManagerNameAvatar}</Text>
        </View>
      </View>
      <View style={{flex: 2, textAlign: 'center'}}>
        <Text style={{textAlign: 'center'}}>{completedForm.created_manager_name} {completedForm.created_manager_first_name}</Text>
        <Text style={{textAlign: 'center'}}>{completedForm.last_update}</Text>
      </View>
      <View style={styleSheet.actions}>
        <TouchableNativeFeedback
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
        >
          <View style={{...styleSheet.actionIconView, ...styleSheet.actionIconEditView}}>
            <Feather name="edit-2" size={15} color="white" />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
        >
          <View style={{...styleSheet.actionIconView, ...styleSheet.actionIconShowView}}>
            <Feather name="eye" size={15} color="white" />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

CompletedFormCard.propTypes = {
  completedForm: PropTypes.object.isRequired,
};

export default CompletedFormCard;