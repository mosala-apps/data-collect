import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';

export const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variableStyle.primaryColor,
    width: '100%',
    height: '100%',
  },
  settingsForm: {
    backgroundColor: '#fff',
    shadow: variableStyle.boxWithShadow,
    height: '50%',
    width: '100%',
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  settingsFormHeader: {
    marginTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  settingsFormTitle: {
    textAlign: 'left',
    fontSize: 20,
    color: variableStyle.tertiaryColor,

  },
  settingsFormText: {
    textAlign: 'left',
    fontSize: 14,
    color: variableStyle.tertiaryColor,

  },
  settingsFormBody: {
    marginTop: '5%',
    padding: '10%',
     width: '96%',
     borderWidth:0.1,
     borderColor: 'rgba(0, 0, 255, 0.09)',
     borderRadius: 5,
  },
  settingsFormInput: {
    borderWidth: 0.5,
    borderColor: 'rgba(99, 132, 234, 0.48)',
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
  },
  settingsFormLabel: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  settingsFormButton: {
    marginTop: 20,
    width: '50%',
    height: 31,
    backgroundColor: variableStyle.secondaryColor,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 50
  },
  settingsButtonText: {
    textAlign: 'center',
    color: '#ffff',
    fontWeight: 'bold',
    marginTop: 3,
    textTransform: 'uppercase',
  },
  settingsTextError: {
    color: 'red',
    marginLeft:10,
  },
});
