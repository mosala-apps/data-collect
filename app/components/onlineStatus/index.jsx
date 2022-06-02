import { Text, View } from 'react-native';
import React from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { styles } from './index.style';

export default function Index() {
  const { isConnected } = useNetInfo();
  const getConnexion = () => {
    if (isConnected) {
      return (<Online />);
    }
    return <Offline />;
  };
  return (
    getConnexion()
  );
}

export function Online() {
  return (
    <View style={styles.onlineStatusContainer}>
      <Text style={styles.onlineStatusButton} />
      <Text>En ligne</Text>
    </View>
  );
}
export function Offline() {
  return (
    <View style={styles.offlineStatusContainer}>
      <Text style={styles.offlineStatusButton} />
      <Text>
        Hors connexion
      </Text>
    </View>
  );
}
