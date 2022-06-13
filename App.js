import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './app/navigations/RootNavigation';
import { store, persistor } from './app/store';
import { NativeBaseProvider } from "native-base";
import { initDatabase } from './app/services/database'

export default function App() {
  // try {
  //   initDatabase();
  // } catch (error) {
  //   console.log(error)
  // }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
            <RootNavigation />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
