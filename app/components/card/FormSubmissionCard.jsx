
import React, { useEffect, useState, useMemo } from 'react';
import { View, Text,SafeAreaView,FlatList,TouchableOpacity,ToastAndroid,RefreshControl} from 'react-native';
import { Card, Button,Avatar, IconButton  } from 'react-native-paper';
import { fetchFormsByHospital,destroyForm } from '../../services/formService'
import { useSelector } from 'react-redux';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons'; 
import { format } from 'date-fns';
import styleSheet from './FormSubmissionCard.style';
import { useNavigation } from '@react-navigation/native';
import variableStyle from '../../config/variable.style';

export default function FormSubmissionCard({statusForm}) {

  const [forms , setForms] = useState([])
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [getDate, setDate] = useState(null);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  /**
   * Store
   */
  const user = useSelector((state) => state.auth.user);

  useEffect(()=>{
   navigation.addListener('focus', () => {
     FormsByHospital()   
    });
  }, [user,navigation])

  const FormsByHospital = async()=>{
    const data = await fetchFormsByHospital({hospitalId:user.hospital.id,status:statusForm})
    setForms(data)
    setRefreshing(false);
    return data
  }

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  }

  const clearFilter = () =>{
    setDate(null);
  }

  const handleConfirmDate = (date) => {
    setDate(date);
    toggleDatePicker();
  }

  
  const filteredFormData = useMemo(() => {
     return getDate ?forms.filter((form)=>format(new Date(form.date), 'dd/MM/yyyy') === format(new Date(getDate), 'dd/MM/yyyy')) : forms
  }, [getDate, forms]);

  const onRefresh = () => {
    FormsByHospital()   
    setRefreshing(true);
  };

  const renderFormDraft = ({item}) => {

    const deleteItemCard = async() => {
      await destroyForm(item.id)
        .then(() => {
            FormsByHospital()
            ToastAndroid.show('Suppression effectuée avec succès', ToastAndroid.SHORT);
        })
        .catch(() => {
          ToastAndroid.show('La suppression a échouée', ToastAndroid.SHORT);
        })
    }

    return  <Card style={styleSheet.containerCard}>
      <TouchableOpacity
        style={{}}
        onPress={() => navigation.navigate('CreateForm', { id: item.formId, savedFormId:item.id})} key={item.id}
      >
        <Card.Content style={styleSheet.containerCardContent}>
          <View style={styleSheet.containerAvatar}>
            <Avatar.Text size={50} label={item.formTitle.split('')[0]} style={styleSheet.avatarText}/>
          </View>
          <View>
          <Text style={styleSheet.containerCardTitle}>{item.formTitle}</Text> 
          <View>
            { JSON.parse(item.payload).last_update &&
              <Text style={{fontSize: 13}}>Date de collecte : {format(new Date(JSON.parse(item.payload).last_update), 'dd/MM/yyyy')}</Text>
            }
            <Text style={{fontSize: 13}}>Enregistrer le {format(new Date(item.date), 'dd/MM/yyyy à HH:MM')}</Text>
          </View>
          </View>
          { statusForm !== 'synchronized' ?
              (<IconButton
                icon="delete"
                color="red"
                labelStyle={styleSheet.containerDeleteButton}
                onPress={ deleteItemCard }
              />) :
              (<Text style={{width: 40}} />) 
          }
        </Card.Content>
      </TouchableOpacity> 
      </Card>
  }
  return (
    <SafeAreaView style={styleSheet.container}>
      <View style={styleSheet.containerCalendar}>
      <Button icon="calendar"  labelStyle={styleSheet.containerCalendarButton}  mode="container" onPress={toggleDatePicker}>
      {getDate ? format(new Date(getDate), 'dd/MM/yyyy'):'Sélectionner une Date'}
      </Button>
      <TouchableOpacity onPress={clearFilter}>
              <AntDesign name="closecircleo" size={15} color="black" style={styleSheet.clearButton}/>
        </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        date={getDate || new Date()}
        minimumDate={new Date(2020, 0, 1)}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={toggleDatePicker}
        />
      </View>
      <View style={styleSheet.containerFlatList}>
      <FlatList
        style={styleSheet.flatList}
        numColumns={1}
        data={filteredFormData}
        renderItem={renderFormDraft}
        refreshControl={(
          <RefreshControl
            colors={[variableStyle.secondaryColor, variableStyle.tertiaryColor]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
      />
      </View>
     
    </SafeAreaView>
  );
}




