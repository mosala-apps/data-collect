import NetInfo from '@react-native-community/netinfo';

let isConnected = null;
const networkSubscribe = NetInfo.addEventListener((state) => {
  isConnected = state.isConnected;
});
networkSubscribe()
export { isConnected }
