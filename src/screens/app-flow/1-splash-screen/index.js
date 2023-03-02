import React, { useEffect } from 'react';
import { Image, View, } from 'react-native';
import Images from '../../../services/constant/images';
import RouteNames from '../../../services/constant/route-names';
import styles from './styles';
const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace(RouteNames.authNavigator)
        }, 1500);
    }, [])
    return (
        <View style={styles.container}>
            <Image style={styles.splashScreenIcon} source={Images.splashScreenIcon} />
        </View>
    );
};

export default SplashScreen;
