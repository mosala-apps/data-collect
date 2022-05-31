import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';

const styleSheet = StyleSheet.create({
  containerHome: {
    backgroundColor: variableStyle.secondaryColor,
    flex: 1,
  },
  containerHomeSearch: {},
  containerHomeForm: {
    backgroundColor: variableStyle.primaryColor,
    flex: 1,
  },
});
export default styleSheet;
