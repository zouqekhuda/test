import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import Colors from '../../services/constant/colors';
import styles from './styles';
const GradientButton = ({ text, onPress, containerStyles, textStyles, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled != undefined ? disabled : false} >
            <LinearGradient
                colors={['#e3bcdc', '#c6ade3', Colors.purple]}
                style={[styles.gradientButton, containerStyles]}
                start={{ x: 0.2, y: 1 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={[styles.fbButtonText, textStyles]} >
                    {text}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};


export default GradientButton;
