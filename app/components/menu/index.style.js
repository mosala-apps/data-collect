import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';

const styleSheet = StyleSheet.create({
  containerMenu: {
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  containerMenuTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15%',
  },
  containerMenuIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
  containerMenuIconText: {
    display: 1,
    justifyContent: 'center',
    alignItems: 'start',
  },
  containerMenuIconColor: {
    color: 'black',
    opacity: 0.7,
  },
});
export default styleSheet;
