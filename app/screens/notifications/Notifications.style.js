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
    marginLeft:80,
    marginBottom:10,
    borderRadius: 5,
    width: 210,
  },
  titleNotification:{
    fontWeight:'bold',
    fontSize:15,
    marginTop:10
  },
  dividerNotification:{
    marginTop:17
  },
  cardContainer:{
    marginTop:16
  },
  hourCard:{
    position:'relative',
    left:250,
    fontWeight:'bold',
  },
  clearButton:{
    position: 'relative',
    bottom:35,
    left:300
  },
  cardTitle:{
    fontSize:9,
  }
})
export default styleSheet