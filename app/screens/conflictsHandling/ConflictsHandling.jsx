import React, { useEffect, useState,useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card,Paragraph,IconButton,Button, Avatar,Badge } from 'react-native-paper';
import { Text, View,ScrollView,FlatList,RefreshControl,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons'; 
import { format } from 'date-fns';
import styleSheet from './ConflictsHandling.style';
import { fetchFormsByHospital } from '../../services/formService'
import { statusForm } from '../../config/variables';
import variableStyle from '../../config/variable.style';

 function ConflictsHandling({navigation}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [getDate, setDate] = useState(null);
  const [forms , setForms] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  const user = useSelector((state) => state.auth.user);

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirmDate = (date) => {
    toggleDatePicker();
    setDate(date);
  }

  useEffect(()=>{
    FormsConflictByHospital()   
   }, [user])

  const FormsConflictByHospital = async()=>{
    const data = await fetchFormsByHospital({hospitalId:user.hospital.id,status:statusForm.conflict})
    setForms(data)
    setRefreshing(false);
    return data
  }

  const clearFilter = () =>{
    setDate(null);
  }

  const filteredFormData = useMemo(() => {
    return getDate ?forms.filter((form)=>format(new Date(form.date), 'dd/MM/yyyy') === format(new Date(getDate), 'dd/MM/yyyy')) : forms
 }, [getDate, forms]);

 const onRefresh = () => {
  FormsConflictByHospital()   
  setRefreshing(true);
};

 const renderFormDraft = ({item}) =>{
    return <View style={styleSheet.bodyContainer}>
            <Card style={styleSheet.containerCard}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ResolveConflictForm', { id: item.formId, savedFormId:item.id,formTitle:item.formTitle,last_update:JSON.parse(item.payload).last_update})} key={item.id}
                disabled={item.conflictResolved?true:false}
              >
                <Card.Content style={styleSheet.containerCardContent}>
                  <View style={styleSheet.containerAvatar}>
                    <Avatar.Text size={50} color="white" label={item.formTitle.split('')[0].toUpperCase()} style={styleSheet.avatarText}/>
                  </View>
                  <View>
                    <Text style={styleSheet.nameCTCO}>{JSON.parse(item.payload).created_manager_first_name} {JSON.parse(item.payload).created_manager_name}</Text> 
                    <Text style={styleSheet.containerCardTitle}>{item.formTitle}</Text> 
                    <View  style={styleSheet.containerDate}>
                      { JSON.parse(item.payload).last_update &&
                        <Text style={{fontSize: 13}}>Date de collecte : {format(new Date(JSON.parse(item.payload).last_update), 'dd/MM/yyyy')}</Text>
                      }
                      <Text style={{fontSize: 13}}>Enregistrer le {format(new Date(item.date), 'dd/MM/yyyy')}</Text>
                    </View>
                    {
                        item.conflictResolved?<Text style={styleSheet.statusResolved}>Status:<Text style={styleSheet.Resolved} color="red">Résolus</Text></Text>:<Text style={styleSheet.statusResolved}>Status:<Text style={styleSheet.NotResolved} color="green"> Non résolus</Text></Text>
                    }
                  </View>

                </Card.Content>
              </TouchableOpacity>
            </Card>
          </View>
 }

  return(
    <SafeAreaView style={styleSheet.container}>
      <View style={styleSheet.headerContainer}>
        <View>
          <IconButton
              icon="arrow-left"
              color="white"
              size={20}
              onPress={() => navigation.navigate('Home')}
            />
        </View>
        <View>
          <Text style={styleSheet.headerTitle}>Gestion des conflits</Text>
        </View>
      </View>
      <View>
        <Button icon="calendar" style={styleSheet.filterDate} labelStyle={{color:'black'}}  mode="contained" onPress={toggleDatePicker}>
            {getDate ? format(new Date(getDate), 'dd/MM/yyyy'):'Sélectionner une Date'}
        </Button>
        <TouchableOpacity onPress={clearFilter}>
              <AntDesign name="closecircleo" size={15} color="white" style={styleSheet.clearButton}/>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        date={getDate || new Date()}
        minimumDate={new Date(2020, 0, 1)}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={toggleDatePicker}
        />
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
  )
}

export default ConflictsHandling;