import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';

export const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    fontWeight: 'bold',
    fontSize: 20,
    color: variableStyle.tertiaryColor,

  },
  settingsFormText: {
    textAlign: 'left',
    fontSize: 14,
    color: variableStyle.tertiaryColor,

  },
  settingsFormBody: {
    marginTop: '3%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
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
  },
  settingsTextError: {
    color: 'red',
    marginLeft: 10,
  },
});
