import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';

const styleSheet = StyleSheet.create({
  card: {
    marginBottom: 10,
    marginHorizontal: 5,
  },
  cardView: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatarText: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundColor: variableStyle.fade,
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
