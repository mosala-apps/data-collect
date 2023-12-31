import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  onlineStatusContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  onlineStatusButton: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    marginRight: '2%',
  },
  offlineStatusContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  offlineStatusButton: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: 'red',
    marginRight: '2%',
  },
})
