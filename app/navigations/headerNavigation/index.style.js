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
  notificationCount: {
    position:'absolute',
    top: -5,
    right: -2,
    height: 15,
    width: 15,
    color: '#ffffff',
    backgroundColor: 'red',
    borderRadius:50,
    fontSize: 10,
    textAlign:'center'
  }
})
export default styleSheet
