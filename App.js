import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import RootNavigation from './app/navigations/RootNavigation';
import {store} from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
      <RootNavigation />
       </PersistGate>
    </Provider>
  );
}
