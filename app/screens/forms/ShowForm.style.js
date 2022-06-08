import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variableStyle.secondaryColor,
  },
  headerContainer: {
    backgroundColor: variableStyle.secondaryColor,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'flex-start',
    height: 60,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  headerIconContainer: {
    width: 20,
  },
  headerIconView: {
    borderRadius: 15,
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerFilterContainer: {
    marginLeft: 20,
  },
  bodyContainer: {
    backgroundColor: variableStyle.primaryColor,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  titleForm: {
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: variableStyle.textMuted,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  textMuted: {
    fontSize: 12,
    color: variableStyle.textMuted,
  }
});
export default styleSheet;
