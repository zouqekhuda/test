import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../../services/constant/colors';
import Fonts from '../../../services/constant/fonts';
import ConstantStyles from '../../../services/constant/styles';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerContainer: {
        width: responsiveWidth(90),
        alignSelf: 'center',
        ...ConstantStyles.rowSpaceBetween,
        marginTop: responsiveHeight(2),
    },
    letsFindText: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: Fonts.proximaNovaRegular,
        color: Colors.textHeaderBlack,

    },
    favPlantHeaderText: {
        fontSize: responsiveFontSize(3),
        fontFamily: Fonts.proximaNovaBold,
        color: Colors.textHeaderBlack,
    },
    notifIconContainer: {
        ...ConstantStyles.elevationStyles,
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        borderRadius: 5,
        backgroundColor: Colors.white,
    },
    searchInputContainer: {
        width: responsiveWidth(90),
        alignSelf: 'center',
        borderRadius: 10,
        height: responsiveWidth(10),
        ...ConstantStyles.rowFlextStart,
        marginVertical: responsiveHeight(2),
    },
    searchInput: {
        width: responsiveWidth(80),
        backgroundColor: Colors.screenBackground,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: Colors.textHeaderBlack,
        height: responsiveWidth(10),
        paddingHorizontal: responsiveWidth(5),
    },
    searchButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        borderRadius: 5,
        backgroundColor: Colors.appleGreen,
        marginLeft: -responsiveWidth(1)
    },
});
export default styles