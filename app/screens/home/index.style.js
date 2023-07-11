import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHome: {
    backgroundColor: variableStyle.secondaryColor,
    flex: 1,
  },
  containerHomeSearch: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: '5%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
  containerHomeSearchTextInput: {
    backgroundColor: 'white',
    width: '90%',
    paddingVertical: '2%',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 16,
  },
  containerHomeSearchIcon: {
    marginHorizontal: '2%',
    opacity: 0.3,
  },

  containerHomeForm: {
    backgroundColor: variableStyle.primaryColor,
    flex: 1,
    marginTop: '5%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0)',
  },
  containerHomeFormTitle: {
    marginVertical: '5%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  containerHomeFormCard: {
    marginHorizontal: '2%',
  },
  messageStateForm: {
    textAlign: 'center',
    width: '100%',
  }
})
export default styleSheet;
