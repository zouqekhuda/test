import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Colors from '../../services/constant/colors';
const ActivityIndicatorCustom = ({ isLoading, top, left }) => {
    if (isLoading) return (
        <View style={[styles.loader, (top || left) && { top: top, left: left }]}>
            <ActivityIndicator size={"large"} color={Colors.fbButton} />
        </View>
    )
    else return null
}

const styles = StyleSheet.create({
    loader: {
        position: "absolute",
        zIndex: 300,
        alignSelf: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 25,
        borderRadius: 10,
        top: responsiveHeight(40),
        position: 'absolute',
    },
});

export default ActivityIndicatorCustom;
