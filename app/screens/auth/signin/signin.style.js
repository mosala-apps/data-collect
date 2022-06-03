import { StyleSheet } from 'react-native';
import variableStyle from '../../../config/variable.style';

export const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  signinLogo: {
    width: 220,
    height: 80,
  },
  signinForm: {
    backgroundColor: '#fff',
    shadow: variableStyle.boxWithShadow,
    height: '50%',
    width: '100%',
    borderRadius: 10,
  },
  signinFormHeader: {
    marginTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  signinFormTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: variableStyle.tertiaryColor,

  },
  signinFormText: {
    textAlign: 'center',
    fontSize: 14,
    color: variableStyle.tertiaryColor,

  },
  signinFormBody: {
    marginTop: '5%',
    padding: '5%',
  },
  signinFormInput: {
    borderWidth: 0.5,
    borderColor: 'rgba(99, 132, 234, 0.48)',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: '5%',
    paddingRight: '5%',
    padding: '1.5%'
  },
  signinFormLabel: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signinForgotPassword: {
    color: variableStyle.tertiaryColor,
    textDecorationLine: 'underline',
  },
  signinFormButton: {
    marginTop: 20,
    width: '100%',
    height: 31,
    backgroundColor: variableStyle.secondaryColor,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signinButtonText: {
    textAlign: 'center',
    color: '#ffff',
    fontWeight: 'bold',
    marginTop: 3,
    textTransform: 'uppercase',
  },
  signinAlertError:{
    width: '90%',
    backgroundColor:'#F8D7DA',
    borderColor: '#F5C6CB',
    marginLeft: '5%',
    marginTop: '3%',
    borderRadius:5,
    padding: '5%',
  },
  signinTextError: {
    color: 'red',
  },
  logoutText: { color: 'green', textAlign: 'center', marginTop: '5%' },
  onlineStatusContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    position: 'absolute',
    top: '1%',
    left: '40%'
  },
  offlineStatusContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    position: 'absolute',
    top: '1%',
    left: '25%'
  },
});
