import React, { useMemo } from 'react'
import PropTypes from 'prop-types';
import styleSheet from './CompletedFormCard.style';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns';
import { Avatar, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function CompletedFormCard ({completedForm}) {
  const createdManagerNameAvatar = useMemo(() => {
    return completedForm.created_manager_name ? completedForm.created_manager_name[0] : '-'
  }, [completedForm])
  const navigation = useNavigation();

  return (
    <TouchableNativeFeedback
      background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
      onPress={() => navigation.navigate('CreateForm', { id: completedForm.form_id, onlineFormId: completedForm.id})}
    >
      <Card style={styleSheet.card}>
        <Card.Content>
          <View style={styleSheet.cardView}>
            <View style={{flex: 1}}>
              <Avatar.Text size={40} label={createdManagerNameAvatar} style={styleSheet.avatar} labelStyle={styleSheet.avatarText} />
            </View>
            <View style={{flex: 2, textAlign: 'center'}}>
              <Text style={{textAlign: 'left', textTransform: 'capitalize'}}>{completedForm.created_manager_name} {completedForm.created_manager_first_name}</Text>
              <Text style={{textAlign: 'left', color: '#aaa'}}>
                {format(new Date(completedForm.last_update), 'dd/MM/yyyy')}
              </Text>
            </View>
            <View style={styleSheet.actions}>
              <View style={{...styleSheet.actionIconView, ...styleSheet.actionIconShowView}}>
                <Feather name="eye" size={15} color="white" />
              </View>
            </View>
          </View>
        </Card.Content>
    </Card>
    </TouchableNativeFeedback>
  )
}

CompletedFormCard.defaultProps = {}

CompletedFormCard.propTypes = {
  completedForm: PropTypes.object.isRequired,
};

export default CompletedFormCard;