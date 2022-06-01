import { StyleSheet } from 'react-native'
import variableStyle from '../../config/variable.style'

const styleSheet = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: variableStyle.secondaryColor,
    paddingBottom: '4%',
    paddingTop: '11%',
    paddingLeft: '5%',
  },
  color: {
    color: 'white',
  },
  headerNavigationRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default styleSheet
