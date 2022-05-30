import { StyleSheet } from 'react-native'
import variableStyle from '../../config/variable.style'

const styleSheet = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: variableStyle.secondaryColor,
    paddingBottom: '4%',
    paddingTop: '4%',
  },
  color: {
    color: 'white',
  },
  headerNavigationRight: {
    display: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
  },
})
export default styleSheet
