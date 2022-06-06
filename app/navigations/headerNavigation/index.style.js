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
    top:-10,
    right: -4,
    height: 20,
    width: 20,
    color: '#ffffff',
    backgroundColor: 'red',
    borderRadius:50,
    fontSize:'0.8rem',
    textAlign:'center'
  }
})
export default styleSheet
