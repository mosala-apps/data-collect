import variableStyle from "./variable.style";

export default {
  container: {
    flex: 1,
    backgroundColor: variableStyle.secondaryColor
  },
  headerContainer: {
    backgroundColor: variableStyle.secondaryColor,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  bodyContainer: {
    backgroundColor: variableStyle.primaryColor,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  }
}