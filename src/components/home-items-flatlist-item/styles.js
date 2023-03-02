import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../services/constant/colors';
import Fonts from '../../services/constant/fonts';
import ConstantStyles from '../../services/constant/styles';
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(45),
        // height: responsiveHeight(20),
        marginHorizontal: responsiveWidth(2.5),
        alignSelf: 'center',
        ...ConstantStyles.elevationStyles,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginVertical: responsiveHeight(0.5),
        padding: responsiveWidth(2.5),
    },
    imageContainer: {
        width: responsiveWidth(35),
        height: responsiveHeight(15),
        alignSelf: 'center',
    },
    nameText: {
        fontSize: responsiveFontSize(1.75),
        fontFamily: Fonts.proximaNovaRegular,
        color: Colors.textHeaderBlack,
        width: responsiveWidth(35),
        alignSelf: 'center',
    },
    priceHeartIconContainer: {
        ...ConstantStyles.rowSpaceBetween,
        width: responsiveWidth(35),
        alignSelf: 'center',
    },
    priceContainer: {
        ...ConstantStyles.rowFlextStart,
    },
    priceText: {
        fontSize: responsiveFontSize(1.5),
        fontFamily: Fonts.proximaNovaRegular,
        color: Colors.textHeaderBlack,
        marginRight: responsiveWidth(1.5),
    },
    actualPriceText: {
        fontSize: responsiveFontSize(1.25),
        fontFamily: Fonts.proximaNovaRegular,
        color: Colors.lightGrey,
    },
    favIconContainer: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: Colors.completedGreen,
    },
});
export default styles