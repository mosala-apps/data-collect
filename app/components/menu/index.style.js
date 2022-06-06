import { StyleSheet } from 'react-native'

const styleSheet = StyleSheet.create({
  containerMenu: {
    marginTop: '5%',
  },
  containerMenuTitle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: '5%',
    marginLeft:'6%'
  },
  containerMenuIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginHorizontal: '5%',
  },
  containerMenuIconText: {
    width: '80%',
  },
  containerMenuIconColor: {
    color: 'black',
    opacity: 0.7,
  },
  lineStyleBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    opacity: 0.2,
  },
  lineStyleText: {
    fontSize: 12,
    color: 'black',
    opacity: 0.4,
    marginTop: '7%',
    marginBottom: '3%',
    paddingLeft: '6%',
  },
})
export default styleSheet
