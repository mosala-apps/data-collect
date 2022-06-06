import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: variableStyle.secondaryColor,
    borderRadius: 5,
    borderWidth: 0.5,
    shadowColor: 'rgba(255,255,255,0)',
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    borderColor: 'rgba(0,0,0,0)',
    width: 180,
    paddingHorizontal: '3%',
    marginHorizontal: '1%',
    height: 100,
  },
  containerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerTextRecurrence: {
    color: variableStyle.secondaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    marginVertical: 10,
    paddingVertical: 3,
    borderColor: variableStyle.tertiaryColor,
    backgroundColor: 'white',
  },
});
export default styleSheet;
