import { StyleSheet } from 'react-native'
import partials from '../../config/partials.style'
import variableStyle from '../../config/variable.style'

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
  clearButton:{
    position: 'relative',
    bottom:35,
    left:300
  },
  containerCard: {
    borderWidth: 0.2,
    width: '100%',
    marginTop: '3%',
    paddingVertical: '3%',
    flexDirection: 'row',
    textAlign: 'center',
  },
  containerCardContent: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  avatarText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#6384EA'
  },
  containerCardTitle: {
    fontSize: 16,
    color:'red'
  },
  nameCTCO: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerAvatar: {
    justifyContent: 'center',
    marginRight: '13%'
  },
  containerDate:{
    textAlign:'right'
  },
  statusResolved:{
    marginTop:10,
    fontWeight:'bold'
  },
  Resolved:{
    color:'green'
  },
  NotResolved:{
    color:'red'
  },
  flatList: {
    paddingVertical: '5%',
  },
  containerFlatList: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0.5,
    paddingHorizontal: '2%',
    borderColor: 'white',
  },
})
export default styleSheet