import { StyleSheet } from 'react-native'
import variableStyle from '../../config/variable.style'
import partials from '../../config/partials.style'

const styleSheet = StyleSheet.create({
  container: partials.container,
  headerContainer: partials.headerContainer,
  bodyContainer: partials.bodyContainer,
  headerTitle: partials.headerTitle,
  dateFilter: {
    width:'80%'
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
})
export default styleSheet