import { StyleSheet } from 'react-native'
import variableStyle from '../../config/variable.style'

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: variableStyle.secondaryColor,
    borderRadius: 5,
    borderWidth: 0.5,
    shadowColor: 'rgba(255,255,255,0)',
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
    borderColor: 'rgba(0,0,0,0)',
    width: '50%',
    paddingHorizontal: '3%',
    height: '50%',
  },
  containerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

  },
})
export default styleSheet
