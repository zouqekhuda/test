import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '../../screens'
import RouteNames from '../constant/route-names';
const { AuthRoutes } = Screens
const Stack = createNativeStackNavigator();
const options = {
    headerShown: false
}
const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={RouteNames.loginScreen} component={AuthRoutes.LoginScreen} />
            <Stack.Screen name={RouteNames.signUpScreen} component={AuthRoutes.SignUpScreen} />
        </Stack.Navigator>
    );
}
export default AuthNavigation