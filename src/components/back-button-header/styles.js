import { View, Text, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../services/constant/colors';
import Fonts from '../../services/constant/fonts';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: responsiveWidth(90),
        alignSelf: 'center',
        paddingVertical: responsiveHeight(2)
    },
    backButtonContainer: {
        backgroundColor: Colors.screenBackground,
        height: responsiveFontSize(3),
        width: responsiveFontSize(3),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: Colors.textHeaderBlack,
        fontSize: responsiveFontSize(2),
        textAlignVertical: 'center',
        fontFamily: Fonts.proximaNovaRegular,
    },
});
export default styles