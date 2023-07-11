import NetInfo from '@react-native-community/netinfo';

let isConnected = null;

NetInfo.addEventListener((state) => {
  isConnected = state.isConnected;
});
export { isConnected };
