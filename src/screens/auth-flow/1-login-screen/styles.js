import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Colors from "../../../services/constant/colors";
import Fonts from "../../../services/constant/fonts";
import ConstantStyles from "../../../services/constant/styles";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    imageBackgroundStyle: {
        flex: 1,
    },
    scrollViewContainer: {
        // height: responsiveScreenHeight(99),
        flexGrow: 1,
        backgroundColor: Colors.white,
    },
    splashScreenIcon: {
        height: responsiveWidth(30),
        width: responsiveWidth(30),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: responsiveHeight(8),
        marginBottom: responsiveHeight(5),
    },
    headerTitle: {
        fontSize: responsiveFontSize(3),
        color: Colors.textHeaderBlack,
        fontFamily: Fonts.proximaNovaBold,
        alignSelf: 'center',
        marginRight: responsiveWidth(2)
    },
    welcomeHeaderContainer: {
        ...ConstantStyles.rowFlextStart,
        alignSelf: 'center',
        width: responsiveWidth(85),
        marginTop: responsiveHeight(2),
    },
    headerSubtitle: {
        fontSize: responsiveFontSize(1.75),
        color: Colors.grey,
        fontFamily: Fonts.proximaNovaBold,
        // marginVertical: responsiveHeight(1.5),
        alignSelf: 'center',
        marginBottom: responsiveHeight(2),
        width: responsiveWidth(85)
    },
    buttonsContainer: {
        width: responsiveWidth(90),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: responsiveHeight(3),
    },
    googleButtonContainer: {
        width: responsiveWidth(40),
        height: responsiveHeight(7),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 10
    },
    googleButtonText: {
        fontSize: responsiveFontSize(2),
        color: Colors.googleButtonText,
        fontFamily: Fonts.proximaNovaBold,
    },
    fbButtonContainer: {
        width: responsiveWidth(40),
        height: responsiveHeight(7),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.fbButton,
        backgroundColor: Colors.fbButton,
        borderRadius: 10,
        marginLeft: responsiveWidth(2)
    },
    fbButtonText: {
        fontSize: responsiveFontSize(2),
        color: Colors.white,
        fontFamily: Fonts.proximaNovaBold,
    },
    socialLoginIcon: {
        width: responsiveFontSize(2),
        height: responsiveFontSize(2),
        resizeMode: 'contain',
        marginRight: responsiveWidth(1),
    },
    orSignInWithDividerContainer: {
        width: responsiveWidth(90),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: responsiveHeight(1),
    },
    appleButtonContainer: {
        width: responsiveWidth(40),
        height: responsiveHeight(7),
        alignSelf: 'center',
        borderRadius: 10
    },
    divider: {
        width: responsiveWidth(30),
    },
    gradientButton: {
        height: responsiveHeight(7),
        width: responsiveWidth(90),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: responsiveHeight(2),
    },
    dontHaveAccountContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: responsiveHeight(2),
    },
    forgotPasswordText: {
        fontSize: responsiveFontSize(2),
        color: Colors.purple,
        fontFamily: Fonts.proximaNovaBold,
        alignSelf: 'center',
        width: responsiveWidth(85),
        textAlign: 'right',
        marginTop: responsiveHeight(1),
    },
    signUpText: {
        fontSize: responsiveFontSize(2),
        color: Colors.purple,
        fontFamily: Fonts.proximaNovaBold,
    },
});
export default styles