import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';

const styleSheet = StyleSheet.create({
  card: {
    ...variableStyle.boxWithShadow,
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    marginBottom: 20,
    shadowColor: 'rgba(0,0,0, .2)',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0)'
  },
  avatar: {
    borderRadius: 15,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variableStyle.fade,
  },
  avatarText: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  actions: {
    flex: 2,
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionIconView: {
    borderRadius: 15,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  actionIconShowView: {
    backgroundColor: variableStyle.secondaryColor,
  },
  actionIconEditView: {
    backgroundColor: variableStyle.success,
  },
});
export default styleSheet;
