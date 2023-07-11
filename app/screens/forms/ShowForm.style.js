import { StyleSheet } from 'react-native';
import variableStyle from '../../config/variable.style';
import partials from '../../config/partials.style'

const styleSheet = StyleSheet.create({
  container: partials.container,
  headerContainer: {
    ...partials.headerContainer,
    justifyContent: 'space-between',
  },
  headerFilterContainer: {
    marginLeft: 20,
  },
  bodyContainer: partials.bodyContainer,
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
  },
  filterDate: {
    backgroundColor: 'white',
    padding: 5,
    height: 30,
    borderRadius: 5,
    width: 100,
    textAlign: 'center',
    color: 'black',
  },
  fab: {
    position: 'fixed',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});
export default styleSheet;
