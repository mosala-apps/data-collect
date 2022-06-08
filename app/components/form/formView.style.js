import { StyleSheet } from 'react-native'
import variableStyle from '../../config/variable.style'

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '7%',
  },
  containerArrowGoBack: {},
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: variableStyle.secondaryColor,
    height: 100,
    backgroundColor: variableStyle.secondaryColor,
    paddingHorizontal: '3%',
  },
  containerHeaderTitle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerHeaderHospital: {
    textAlign: 'right',
    color: 'white',
  },
  containerForm: {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 0.5,
    height: 150,
    marginTop: '5%',
    borderColor: 'white',
    borderRadius: 10,
  },
  containerFormStep: {
    backgroundColor: variableStyle.secondaryColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFormStepTitle: {
    color: 'white',
  },
  containerFormInput: {
    flex: 1,
    paddingVertical: '2%',
    marginHorizontal: '5%',
    justifyContent: 'center',
  },
  containerFormInputLabel: {
    flexDirection: 'row',
    marginBottom: '3%',
  },
  containerFormInputLabelText: {
    marginRight: '3%',
  },
  containerFormInputLabelIcon: {
    color: 'red',
  },
  containerFormInputComponent: {
    borderWidth: 0.5,
    borderRadius: 4,

    padding: '1.5%',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
  },
  containerButtonLeft: {
    backgroundColor: '#E0E5F2',
    borderColor: '#E0E5F2',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: '3%',
  },
  containerButtonLeftText: {
    color: variableStyle.secondaryColor,
  },
  containerButtonRight: {
    backgroundColor: variableStyle.secondaryColor,
    borderColor: variableStyle.secondaryColor,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: '3%',
  },
  containerButtonRightText: {
    color: 'white',
  },
})
export default styleSheet
