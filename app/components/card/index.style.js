import { StyleSheet } from 'react-native'
import variableStyle from '../../config/variable.style'

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: variableStyle.secondaryColor,
    borderRadius: 5,
    borderWidth: 0.5,
    shadowColor: 'rgba(255,255,255,0)',
    shadowOpacity: 0.5,
    textAlign: 'center',
    padding: '10%',
    marginTop: '5%',
    borderColor: 'rgba(0,0,0,0)',
  },
  containerText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
export default styleSheet
