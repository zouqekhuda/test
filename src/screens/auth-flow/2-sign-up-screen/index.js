import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, Keyboard, } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CommonActions } from '@react-navigation/native';

import CustomInput from '../../../components/text-input';
import Images from '../../../services/constant/images';
import styles from './styles';
import Colors from '../../../services/constant/colors';
import RouteNames from '../../../services/constant/route-names';
import GradientButton from '../../../components/gradient-button';
import Constants from '../../../services/constant/constants';
import ActivityIndicatorCustom from '../../../components/activity-indicator';
import ToggleButtons from '../../../components/toggle-buttons';
import BackButtonHeader from '../../../components/back-button-header';
import { Icon } from 'react-native-elements';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import ConstantStyles from '../../../services/constant/styles';

const SignUpScreen = ({ navigation }) => {
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const onLoginButtonPress = async () => {
        navigation.replace(RouteNames.appNavigator, { screen: RouteNames.homeScreen })
    }
    const onSignUpButtonPress = () => {
        navigation.replace(RouteNames.signUpScreen)
    }
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="always" >
            <View style={styles.container}>
                <ActivityIndicatorCustom isLoading={isLoading} />
                <BackButtonHeader text="" />
                <View style={styles.welcomeHeaderContainer} >
                    <Text style={styles.headerTitle} >
                        Create New Account
                    </Text>
                    <Icon name='local-fire-department' type='material-icon' size={responsiveFontSize(2)} color={Colors.appleGreen} />
                </View>
                <Text style={styles.headerSubtitle} >
                    Please fill in the form to continue!
                </Text>
                <ToggleButtons button1Text="By Email" button2Text="By Phone Number" onTogglePress={console.log} />
                <Text style={[styles.headerSubtitle, { marginBottom: responsiveHeight(1), }]} >
                    User name
                </Text>
                <CustomInput
                    placeholder="Username"
                    value={email}
                    onChangeText={setEmail}
                    textContentType={Constants.textInputType.email}
                    keyboardType={Constants.keyboardInputType.email}
                    autoCapitalize={Constants.inputAutoCapitalize.none}
                    ref={emailInputRef}
                    onSubmitEditing={() => passwordInputRef.current.focus()}
                    returnKeyType="next"
                    iconName="user"
                    iconType="font-awesome"
                />
                <Text style={[styles.headerSubtitle, { marginBottom: responsiveHeight(1), marginTop: responsiveHeight(1.5) }]} >
                    Email
                </Text>
                <CustomInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    textContentType={Constants.textInputType.email}
                    keyboardType={Constants.keyboardInputType.email}
                    autoCapitalize={Constants.inputAutoCapitalize.none}
                    ref={emailInputRef}
                    onSubmitEditing={() => passwordInputRef.current.focus()}
                    returnKeyType="next"
                    iconName="email"
                    iconType="material-community"
                />
                <Text style={[styles.headerSubtitle, { marginBottom: responsiveHeight(1), marginTop: responsiveHeight(1.5) }]} >
                    Password
                </Text>
                <CustomInput
                    placeholder="Password"
                    isPassword={true}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize={Constants.inputAutoCapitalize.none}
                    ref={passwordInputRef}
                    onSubmitEditing={() => { passwordInputRef.current.blur(); Keyboard.dismiss() }}
                />
                <TouchableOpacity >
                    <Text style={styles.forgotPasswordText} >
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <GradientButton
                    text="Login"
                    onPress={onLoginButtonPress}
                    disabled={isLoading}
                />
                <View style={styles.dontHaveAccountContainer} >
                    <Text style={[styles.googleButtonText, { color: Colors.grey }]} >
                        Already have an account?{' '}
                    </Text>
                    <TouchableOpacity onPress={onSignUpButtonPress} >
                        <Text style={styles.signUpText} >
                            Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default SignUpScreen;