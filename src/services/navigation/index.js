import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteNames from '../constant/route-names';
import AppNavigation from './app-navigation';
import AuthNavigation from './auth-navigation';

const Stack = createNativeStackNavigator()

const options = {
    headerShown: false
}

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={RouteNames.appNavigator} screenOptions={options} >
                <Stack.Screen name={RouteNames.appNavigator} component={AppNavigation} />
                <Stack.Screen name={RouteNames.authNavigator} component={AuthNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainNavigation