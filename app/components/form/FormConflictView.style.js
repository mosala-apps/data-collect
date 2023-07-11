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
    fontSize:19
  },
  titleConflict:{
    textAlign:'center',
    fontWeight:'bold'
  },
  contentSelectedModeResolve:{
    marginTop:10
  },
  cardContentModeResolve:{
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  oldSubmission:{
    color:'red',
    fontSize:15,
    marginBottom:10
  },
  newSubmission:{
    color:'blue',
    fontSize:15,
    marginBottom:10
  },
  contentStep:{
    backgroundColor: variableStyle.secondaryColor,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop:10
  },
  titleStep:{
    textAlign:'center',
    fontWeight:'bold',
    color:'white'
  },
  oldResponse:{
    color:'red',
  },
  newResponse:{
    color:'blue',
  },
  cardResponse:{
    marginBottom:10
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
  },
})
export default styleSheet