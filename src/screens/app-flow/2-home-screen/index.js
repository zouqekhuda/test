import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import ActivityIndicatorCustom from '../../../components/activity-indicator';
import HomeItemsFlatListItem from '../../../components/home-items-flatlist-item';
import { getCartData } from '../../../services/apis/get-cart';
import Colors from '../../../services/constant/colors';
import Constants from '../../../services/constant/constants';
import styles from './styles';
const HomeScreen = () => {
    const [searchText, setSearchText] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [favorites, setFavorites] = useState([])
    const onFavPress = (item, index) => {
        let favCopy = [...favorites]
        favCopy[index] = !favorites[index]
        setFavorites(favCopy)
    }
    const onChangeText = async (text) => {
        setSearchText(text)
        if (text != '') {
            const filteredValues = data.filter(item => {
                const title = String(item?.title).toUpperCase()
                if (title.includes(text.toUpperCase())) {
                    return item
                }
            })
            setFilteredData(filteredValues)
        } else {
            setFilteredData(data)
        }
    }
    const renderItem = ({ item, index }) => {
        return (
            <HomeItemsFlatListItem isFav={favorites[index]} item={item} index={index} onFavPress={onFavPress} />
        )
    }
    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const { data } = await getCartData()
                setFavorites(new Array(data?.carts[0]?.products.length).fill(false))
                setData(data?.carts[0]?.products)
                setFilteredData(data?.carts[0]?.products)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                Alert.alert(Constants.appTexts.errorHeader, Constants.appTexts.getCartDataError, [{
                    text: 'Ok'
                }])
            }
        }
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <ActivityIndicatorCustom isLoading={isLoading} />
            <View style={styles.headerContainer} >
                <View>
                    <Text style={styles.letsFindText} >
                        Lets find
                    </Text>
                    <Text style={styles.favPlantHeaderText} >
                        Favorite Plant
                    </Text>
                </View>
                <View style={styles.notifIconContainer} >
                    <Icon type='ionicon' name='notifications-outline' size={responsiveFontSize(2.5)} color={Colors.appleGreen} />
                </View>
            </View>
            <View style={styles.searchInputContainer} >
                <TextInput
                    placeholder='Search here'
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity style={styles.searchButton} >
                    <Icon type='feather' name='search' size={responsiveFontSize(2)} color={Colors.white} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    );
};
export default HomeScreen;