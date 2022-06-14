
import React, { useEffect, useState, useMemo } from 'react';
import { View, Text,SafeAreaView,FlatList,TouchableOpacity,ToastAndroid} from 'react-native';
import { Card, Button,Avatar  } from 'react-native-paper';
import { fetchFormsByHospital,destroyForm } from '../../services/formService'
import { useSelector } from 'react-redux';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons'; 
import { format } from 'date-fns';
import styleSheet from './FormSubmissionCard.style';

export default function FormSubmissionCard({navigation,statusForm}) {

  const [forms , setForms] = useState([])
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [getDate, setDate] = useState(null);
  const [isDeleted,setIsDeleted] =useState(false);

    /**
   * Store
   */
     const user = useSelector((state) => state.auth.user);
     

  useEffect(()=>{
    FormsByHospital()
  },[user])

  const FormsByHospital = async()=>{
    const data = await fetchFormsByHospital({hospitalId:user.hospital.id,status:statusForm})
    setForms(data)
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


  const renderFormDraft=  ({item})=>{
    setIsDeleted(false)

    const deleteItemCard = async()=>{
     await destroyForm(item.id).then(()=>{
      FormsByHospital()
     ToastAndroid.show('La suppression a réussi', ToastAndroid.SHORT);
   
    }).catch(()=>{
     ToastAndroid.show('La suppression a échoué', ToastAndroid.SHORT);
   
    })
    }
    return  <Card style={styleSheet.containerCard}>
              <TouchableOpacity style={{}} onPress={()=>navigation.navigate('CreateForm', { id: item.formId, savedFormId:item.id})} key={item.id}>
              <Card.Content style={styleSheet.containerCardContent}>
                <View style={styleSheet.containerAvatar}>
                <Avatar.Text size={50} label={item.formTitle.split('')[0]} style={styleSheet.avatarText}/>
                </View>
              <View>
              <Text style={styleSheet.containerCardTitle}>{item.formTitle}</Text> 
                 
                    <View>
                    <Text>{format(new Date(item.date), 'dd/MM/yyyy HH:MM')}</Text>
                    </View>
              </View>

              <Button icon="delete"  labelStyle={styleSheet.containerDeleteButton}  onPress={ deleteItemCard } ></Button>
 
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
      />
      </View>
     
    </SafeAreaView>
  );
}




