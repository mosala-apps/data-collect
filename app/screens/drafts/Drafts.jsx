import React, { useEffect, useState, useMemo } from 'react';
import { View, Text,SafeAreaView,FlatList,TouchableOpacity} from 'react-native';
import { Card, Button,Title,Paragraph,Avatar  } from 'react-native-paper';
import { fetchFormsByHospital } from '../../services/formService'
import { statusForm } from '../../config/variables';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons'; 
import getMinutes from 'date-fns/getMinutes'
import getHours from 'date-fns/getHours'
import { format } from 'date-fns';
import styleSheet from './Drafts.style';

export default function Drafts({navigation}) {

  const [forms , setForms] = useState([])
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [getDate, setDate] = useState(null);


    /**
   * Store
   */
     const user = useSelector((state) => state.auth.user);
     

  useEffect(()=>{
    FormsByHospital()
  },[user])

  const FormsByHospital = async()=>{
    const data = await fetchFormsByHospital({hospitalId:user.hospital.id,status:statusForm.draft})
    setForms(data)
    console.log('data ->', data)
    return data
  }

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  }

  const clearFilter = () =>{
    setDate(null);
  }

  const handleConfirmDate = (date) => {
    toggleDatePicker();
    setDate(date);
  }

  const renderFormDraft=({item})=>{
    return  <Card style={styleSheet.containerCard}>
              <TouchableOpacity style={{}} onPress={()=>navigation.navigate('CreateForm', { id: item.formId, savedFormId:item.id})} key={item.id}>
              <Card.Content style={{flexDirection:'row',textAlign:'center'}}>
                <View style={{justifyContent:'center', marginRight:'5%'}}>
                <Avatar.Text size={50} label={item.formTitle.split('')[0]} style={styleSheet.avatarText}/>
                </View>
              <View>
              <Text style={styleSheet.containerCardTitle}>{item.formTitle}</Text> 
                 
                    <View>
                    <Text>{format(new Date(item.date), 'dd/MM/yyyy HH:MM')}</Text>
                    </View>
              </View>
                    
              </Card.Content>
              </TouchableOpacity> 

            </Card>
  }
  return (
    <SafeAreaView style={styleSheet.container}>
      <View style={styleSheet.containerCalendar}>
      <Button icon="calendar"  labelStyle={styleSheet.containerCalendarButton}  mode="" >
      {getDate ? format(new Date(getDate), 'dd/MM/yyyy'):'Sélectionner une Date'}        </Button>
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
        data={forms}
        renderItem={renderFormDraft}
      />
      </View>
     
    </SafeAreaView>
  );
}
