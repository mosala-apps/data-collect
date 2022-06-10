import React from 'react';
import {
  ScrollView, Text, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';
import styleSheet from './CreateForm.style';
import FormView from '../../components/form/FormView';
import { useSelector } from 'react-redux';

function CreateForm({ route, navigation }) {
  const currentFormId = route.params.id;

  /**
   * Store
   */
  const hospital = useSelector((state) => state.hospital.hospital);
  const selectedForm = hospital.forms.find((form) => form.id === currentFormId);

  return (
    <SafeAreaView style={styleSheet.container}>
      <View style={styleSheet.headerContainer}>
        <View>
          <IconButton
            icon="arrow-left"
            color="white"
            size={20}
            onPress={() => navigation.navigate('ShowForm', { id: currentFormId })}
          />
        </View>
        <View>
          <Text style={styleSheet.headerTitle}>{ selectedForm.title }</Text>
        </View>
      </View>
      <View style={styleSheet.bodyContainer}>
        <ScrollView>
          <FormView
            form={selectedForm}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default CreateForm;
