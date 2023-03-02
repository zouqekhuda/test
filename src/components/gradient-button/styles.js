import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../services/constant/colors';
import Fonts from '../../services/constant/fonts';
const styles = StyleSheet.create({
    gradientButton: {
        height: responsiveHeight(7),
        width: responsiveWidth(90),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: responsiveHeight(2),
    },
    fbButtonText: {
        fontSize: responsiveFontSize(2),
        color: Colors.white,
        fontFamily: Fonts.proximaNovaBold,
    },
});
export default styles