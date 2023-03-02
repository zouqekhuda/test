import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../services/constant/colors';
import Fonts from '../../services/constant/fonts';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // width: responsiveWidth(80),
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: responsiveHeight(2.5),
        backgroundColor: Colors.screenBackground,
        borderRadius: 10,
        padding: responsiveWidth(1.5)
    },
    activeLeftButtonContainer: {
        backgroundColor: Colors.darkPurple,
        width: responsiveWidth(40),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.darkPurple,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: responsiveHeight(1.5),
        marginRight: responsiveWidth(1),
        zIndex: 5,
    },
    activeRightButtonContainer: {
        backgroundColor: Colors.darkPurple,
        width: responsiveWidth(40),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.darkPurple,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: responsiveHeight(1.5),
        // marginLeft: -responsiveWidth(5),
        zIndex: 5,
    },
    activeButtonText: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.75),
        fontFamily: Fonts.proximaNovaRegular,
    },
    inactiveLeftButtonContainer: {
        backgroundColor: Colors.screenBackground,
        width: responsiveWidth(40),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: responsiveHeight(1.5),
        zIndex: 0,
    },
    inactiveRightButtonContainer: {
        backgroundColor: Colors.screenBackground,
        width: responsiveWidth(40),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: responsiveHeight(1.5),
        zIndex: 0,
    },
    inactiveButtonText: {
        color: Colors.grey,
        fontSize: responsiveFontSize(1.75),
        fontFamily: Fonts.proximaNovaRegular,
    },
});
export default styles