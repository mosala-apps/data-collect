import { StyleSheet } from 'react-native'
import variableStyle from '../../config/variable.style'

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepCard: {
    backgroundColor: variableStyle.secondaryColor,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  stepCardText: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
  formFieldsView: {

  },
  formFieldCard: {
    marginBottom: 10,
    borderRadius: 10,
  },
  formFieldCardFirst: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
  },
})
export default styleSheet
