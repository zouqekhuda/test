import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '../../screens'
import RouteNames from '../constant/route-names';
const { AppRoutes } = Screens
const Stack = createNativeStackNavigator();
const options = {
    headerShown: false
}
const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={RouteNames.splashScreen} component={AppRoutes.SplashScreen} />
            <Stack.Screen name={RouteNames.homeScreen} component={AppRoutes.HomeScreen} />
        </Stack.Navigator>
    );
}
export default AppNavigation