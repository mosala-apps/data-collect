import { StyleSheet } from 'react-native'
import variableStyle from '../../config/variable.style'

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: variableStyle.secondaryColor,
  },
  containerCalendar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: 'white',
    marginVertical: '4%',
    marginHorizontal: '5%',
    borderRadius: 4,
  },
  containerCalendarButton: {
    color: 'black',
    fontSize: 14,
    color: 'black',
    paddingVertical: '1%',
  },
  containerFlatList: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0.5,
    paddingHorizontal: '5%',
    borderColor: 'white',
  },
  flatList: {
    paddingVertical: '5%',
  },
  containerCard: {
    borderWidth: 0.2,
    width: '100%',
    marginTop: '3%',
    paddingVertical: '3%',
    flexDirection: 'row',
    textAlign: 'center',
  },
  containerCardDate: {
    textAlign: 'right',
  },
  containerCardContent: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  containerCardStatus: {
    color: 'red',
    fontStyle: 'italic',
  },
  containerCardTitle: {
    fontSize: 16,
  },
  containerAvatar: {
    justifyContent: 'center',
    marginRight: '5%',
  },
  avatarText: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundColor: variableStyle.fade,
  },
 
  containerDeleteButton: {
    color: 'black',
    textAlign: 'right',
  },
})
export default styleSheet
