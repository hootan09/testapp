import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,ScrollView, Image, FlatList, ImageBackground } from 'react-native';

import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';

import profileImg from '../assets/images/person.png'

Feather.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {
    const renderDiscoverItem = (item) =>{
        return(
            <TouchableOpacity>
                <ImageBackground 
                    source={item.item.image}
                    style={styles.discoverItem}
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle}>{item.item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" size={18} color={colors.white}/>
                        <Text style={styles.discoverItemLocationText}>{item.item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* <Button title="Details" onPress={()=> navigation.navigate("Details")} /> */}
            <ScrollView>
                {/* Header */}
                <View style={styles.menuWrapper}>
                    <Feather name="menu" size={32} color={colors.black} style={styles.menuIcon} />
                    <Image source={profileImg} style={styles.profileImage}/>
                </View>
                
                {/* Discover */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={[styles.discoverCategoriesText, {color:colors.orange}]}>All</Text>
                        <Text style={styles.discoverCategoriesText}>Destinations</Text>
                        <Text style={styles.discoverCategoriesText}>Cities</Text>
                        <Text style={styles.discoverCategoriesText}>Experiences</Text>
                    </View>
                </View>    
                <View style={styles.discoverItemsWrapper}>
                    <FlatList 
                        data={discoverData}
                        renderItem={renderDiscoverItem}
                        keyExtractor={(item)=> item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,

    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
    },
    menuIcon: {},
    discoverWrapper: {
        marginHorizontal: 20,
    },
    discoverTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32
    },
    discoverCategoriesWrapper: {
        flexDirection: "row",
        marginTop: 20
    },
    discoverCategoriesText: {
        marginRight: 40,
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: colors.gray
    },
    discoverItemsWrapper: {
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 20,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        fontFamily: "Lato-Bold",
        fontSize: 18,
        color:colors.white,
    },
    discoverItemLocationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,

    },
    discoverItemLocationText: {
        marginLeft: 5,
        color: colors.white,
        fontFamily: "Lato-Bold",
        fontSize: 14,
    },
})

export default Home
