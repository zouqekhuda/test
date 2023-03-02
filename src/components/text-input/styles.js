import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../services/constant/colors';
import Fonts from '../../services/constant/fonts';
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: Colors.inputBackgroundGrey,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems:'center',
        marginTop: responsiveHeight(1.5),
        fontFamily: Fonts.proximaNovaBold,
        flexDirection: 'row',
    },
    passwordInput:{
        width: responsiveWidth(70),
        height: responsiveHeight(7),
        justifyContent: 'center',
        fontFamily: Fonts.proximaNovaBold,
        color: Colors.textHeaderBlack,
    },
    input: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: Colors.inputBackgroundGrey,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: responsiveHeight(1.5),
        fontFamily: Fonts.proximaNovaBold,
        color: Colors.textHeaderBlack,
    },
});
export default styles