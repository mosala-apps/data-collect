import { StyleSheet } from 'react-native';
import variableStyle from '../../../config/variable.style';
export const styles = StyleSheet.create({
    signin__container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:variableStyle.secondaryColor,
        height: '100%',
        paddingLeft:'5%',
        paddingRight: '5%'
    },

    signin__form:{
        backgroundColor:'#fff',
        shadow: variableStyle.boxWithShadow,
        height: '50%',
        width: '100%',
        borderRadius:10,
    }
});
