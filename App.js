import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import RootNavigation from './app/navigations/RootNavigation';
import {store, persistor} from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <RootNavigation />
       </PersistGate>
    </Provider>
  );
}
