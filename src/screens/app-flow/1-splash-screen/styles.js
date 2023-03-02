import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Colors from "../../../services/constant/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    splashScreenIcon: {
        height: responsiveWidth(30),
        width: responsiveWidth(30),
        resizeMode: 'contain',
    }
});
export default styles