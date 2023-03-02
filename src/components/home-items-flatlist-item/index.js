import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Colors from '../../services/constant/colors';
import styles from './styles';
const HomeItemsFlatListItem = ({ item, onFavPress, isFav, index }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://png.pngtree.com/element_pic/00/16/04/24571c890bb3473.jpg' }} style={styles.imageContainer} />
            <Text style={styles.nameText} numberOfLines={2}>
                {item?.title}
            </Text>
            <View style={styles.priceHeartIconContainer} >
                <View style={styles.priceContainer} >
                    <Text style={styles.priceText}>
                        $ {item?.discountedPrice}
                    </Text>
                    <Text style={styles.actualPriceText}>
                        $ {item?.price}
                    </Text>
                </View>
                <TouchableOpacity style={styles.favIconContainer} onPress={() => onFavPress(item, index)} >
                    <Icon name='heart' type='ant-design' size={responsiveFontSize(1.5)} color={isFav ? Colors.cancelledRed : Colors.white} />
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default HomeItemsFlatListItem;
