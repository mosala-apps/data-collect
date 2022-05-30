import NetInfo from '@react-native-community/netinfo';

export let isConnected = null;
const networkSubscribe = NetInfo.addEventListener((state) => {
  isConnected = state.isConnected;
  console.log('network ', isConnected);
});
networkSubscribe();
