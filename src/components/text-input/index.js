import React, { useState, forwardRef } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../services/constant/colors';
import styles from './styles'
const CustomInput = forwardRef(({
    value,
    onChangeText,
    placeholder,
    style,
    isPassword,
    textContentType,
    keyboardType,
    autoCapitalize,
    editable,
    onSubmitEditing,
    returnKeyType,
    iconName,
    iconType,
}, ref) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const onPasswordIconPress = () => {
        setSecureTextEntry(!secureTextEntry)
    }
    if (isPassword) {
        return (
            <View style={[styles.container, style]}>
                <Icon size={responsiveFontSize(3)} color={Colors.purple} name={'lock'} type="feather" />
                <TextInput
                    ref={ref}
                    style={[styles.passwordInput, {width: responsiveWidth(60)}]}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    returnKeyType={returnKeyType ? returnKeyType : "done"}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.lightGrey}
                    textContentType="password"
                    autoCapitalize="none"
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={false}
                />
                <TouchableOpacity onPress={onPasswordIconPress} >
                    <Icon size={responsiveFontSize(3)} color={Colors.purple} name={secureTextEntry ? 'eye-with-line' : 'eye'} type="entypo" />
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={[styles.container, style]}>
                <Icon size={responsiveFontSize(3)} color={Colors.purple} name={iconName} type={iconType} />
                <TextInput
                    ref={ref}
                    style={styles.passwordInput}
                    value={value}
                    onChangeText={onChangeText}
                    returnKeyType={returnKeyType ? returnKeyType : "done"}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.lightGrey}
                    textContentType="password"
                    autoCapitalize="none"
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={false}
                />
            </View>
        );
    }
})

export default CustomInput;
