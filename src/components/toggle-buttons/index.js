import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { responsiveWidth } from 'react-native-responsive-dimensions';
import GradientButton from '../gradient-button';
import styles from './styles';
const ToggleButtons = ({ button1Text, button2Text, onTogglePress, toggleButtonWidth, initialState, overRideValue, }) => {
    const [activeButton, setActiveButton] = useState(initialState ? initialState : 1)
    const onPress = (buttonPressed) => {
        setActiveButton(buttonPressed)
        onTogglePress(buttonPressed)
    }
    return (
        <View style={styles.container}>
            {
                activeButton == 1 ? (
                    <GradientButton
                        onPress={() => onPress(1)}
                        text={button1Text}
                        containerStyles={{ width: responsiveWidth(40), marginTop: 0, }}
                    />
                ) : (
                    <TouchableOpacity onPress={() => onPress(1)} style={[styles.inactiveLeftButtonContainer, toggleButtonWidth && { width: toggleButtonWidth }]} >
                        <Text style={activeButton == 1 ? styles.activeButtonText : styles.inactiveButtonText}>
                            {button1Text}
                        </Text>
                    </TouchableOpacity>
                )
            }
            {
                activeButton == 2 ? (
                    <GradientButton
                        onPress={() => onPress(1)}
                        text={button2Text}
                        containerStyles={{ width: responsiveWidth(40), marginTop: 0 }}
                    />
                ) : (
                    <TouchableOpacity onPress={() => onPress(2)} style={[styles.inactiveRightButtonContainer, toggleButtonWidth && { width: toggleButtonWidth }]} >
                        <Text style={activeButton == 2 ? styles.activeButtonText : styles.inactiveButtonText}>
                            {button2Text}
                        </Text>
                    </TouchableOpacity>
                )
            }
        </View>
    );
};
export default ToggleButtons;