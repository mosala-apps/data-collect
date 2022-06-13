import { StyleSheet } from 'react-native'
import variableStyle from '../../config/variable.style'
import partials from '../../config/partials.style'

const styleSheet = StyleSheet.create({
  container: partials.container,
  headerContainer: {
    ...partials.headerContainer,
    justifyContent: 'space-between',
  },
  bodyContainer: {
    ...partials.bodyContainer,
    backgroundColor: variableStyle.fourthColor,
  },
  headerTitle: partials.headerTitle,
})
export default styleSheet
