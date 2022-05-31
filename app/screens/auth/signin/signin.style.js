import { StyleSheet } from 'react-native';
import variableStyle from '../../../config/variable.style';

export const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variableStyle.primaryColor,
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
<<<<<<< HEAD
  signin__form_body: {
=======
  signinFormBody: {
>>>>>>> c83f4e2998689089d1c890e6e3a255d276b14081
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
  signinTextError: {
    color: 'red',
  },
});
