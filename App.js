import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import RootNavigation from './app/navigations/RootNavigation'
import { store } from './app/store'

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}
