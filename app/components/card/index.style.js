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
    width: '49%',
    paddingHorizontal: '3%',
    height: 100,
  },
  containerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styleSheet;
