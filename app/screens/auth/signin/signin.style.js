import { StyleSheet } from 'react-native';
import variableStyle from '../../../config/variable.style';

export const styles = StyleSheet.create({
  signin__container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variableStyle.primaryColor,
    height: '100%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  signin__logo:{ 
    width: 220, 
    height: 80 
  },
  signin__form: {
    backgroundColor: '#fff',
    shadow: variableStyle.boxWithShadow,
    height: '50%',
    width: '100%',
    borderRadius: 10,

  },
  signin__form_header: {
    marginTop: '5%',
    paddingLeft:'5%',
    paddingRight:'5%'
  },
  signin__form_title: {
    textAlign: 'center',
    fontSize: 20,
    color: variableStyle.tertiaryColor,

  },
  signin__form_text: {
    textAlign: 'center',
    fontSize: 14,
    color: variableStyle.tertiaryColor,

  },
  signin__form_body: {
    marginTop: '5%',
    padding: '5%',
  },
  signin__form_input: {
    borderWidth: 0.5,
    borderColor: 'rgba(99, 132, 234, 0.48)',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft:'5%',
    paddingRight:'5%'
  },
  signin__form_label: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  signin__forgotPassword:{
    color: variableStyle.tertiaryColor,
    textDecorationLine:'underline'
  },
  signin__form_button: {
      marginTop: 20,
    width: '100%',
    height: 31,
    backgroundColor: variableStyle.secondaryColor,
    borderRadius: 5,
  },
  signin__button_text:{
     textAlign:'center',
     color: '#ffff', 
     fontWeight:'bold', 
     marginTop:3,
     textTransform:'uppercase'
  }
});
