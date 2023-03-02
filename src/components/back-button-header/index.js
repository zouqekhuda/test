import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Colors from '../../services/constant/colors';
import styles from './styles';
const BackButtonHeader = ({ text, onBackPress }) => {
    const navigation = useNavigation()
    const onPress = () => {
        if (onBackPress) {
            onBackPress()
        } else
            navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonContainer} onPress={onPress} >
                <Icon name='chevron-left' type='entypo' size={responsiveFontSize(2.5)} color={Colors.darkGreen} />
            </TouchableOpacity>
            <Text style={styles.header} >
                {text}
            </Text>
            <Text style={styles.header} >
                {'      '}
            </Text>
        </View>
    );
};
export default BackButtonHeader;