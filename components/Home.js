import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,ScrollView, Image, FlatList, ImageBackground } from 'react-native';

import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';

import profileImg from '../assets/images/person.png';
import menuImg from '../assets/images/menu.png';

Feather.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {
    const renderDiscoverItem = ({item}) =>{
        return(
            <TouchableOpacity
                onPress={()=>navigation.navigate("Details", {item: item})}
            >
                <ImageBackground 
                    source={item.image}
                    style={styles.discoverItem}
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" size={18} color={colors.white}/>
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    };

    const renderActivityItem = ({item}) =>{
        return(
            <View style={styles.activityItemWrapper}>
                <Image source={item.image} style={styles.activityItemImage}/>
                <Text style={styles.activityItemText}>{item.title}</Text>
            </View>
        )
    };

    const renderlearnMoreItem = ({item}) => {
        return(
            <ImageBackground 
                source={item.image} 
                style={styles.learnMoreItem}
                imageStyle={styles.learnMoreItemImage}
            >
                <Text style={styles.learmMoreitemText}>{item.title}</Text>
            </ImageBackground>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* <Button title="Details" onPress={()=> navigation.navigate("Details")} /> */}
            <ScrollView>
                {/* Header */}
                <View style={styles.menuWrapper}>
                    {/* <Feather name="menu" size={32} color={colors.black} style={styles.menuIcon} /> */}
                    <TouchableOpacity
                        onPress={()=>console.log('hello')}
                    >
                        <Image source={menuImg} style={styles.menuIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("Profile")}
                    >
                        <Image source={profileImg} style={styles.profileImage}/>
                    </TouchableOpacity>
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

                {/* Activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={[styles.activitiesItemsWrapper, {marginLeft: 20,}]}>
                        <FlatList 
                            data={activitiesData}
                            renderItem={renderActivityItem}
                            keyExtractor={(item)=> item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* LearMore */}
                <View style={styles.learnMoreWrapper}>
                    <Text style={styles.learnMoreTitle}>Learn More</Text>
                    <View style={[styles.learnMoreItemsWrapper, {marginLeft: 20,}]}>
                        <FlatList 
                            data={learnMoreData}
                            renderItem={renderlearnMoreItem}
                            keyExtractor={(item)=> item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
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
    menuIcon: {
        width:24,
        height: 24,
        // marginTop: -5
    },
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
        // marginTop: 10,
    },
    discoverItem: {
        width: 160,
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
    activitiesWrapper: {
        marginTop: 10,
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontFamily: "Lato-Bold",
        fontSize: 24,
        color: colors.black,

    },
    activitiesItemsWrapper: {
        paddingVertical: 20,
    },
    activityItemWrapper: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 25,

    },
    activityItemImage: {
        width: 36,

    },
    activityItemText: {
        marginTop: 5,
        fontFamily: "Lato-Bold",
        fontSize: 14,
        color: colors.gray,
    },
    learnMoreWrapper: {
        marginTop: 20,
    },
    learnMoreTitle: {
        marginHorizontal: 20,
        fontFamily: "Lato-Bold",
        fontSize: 24,
        color:colors.black
    },
    learnMoreWrapper: {},
    learnMoreTitle: {
        marginHorizontal: 20,
        fontFamily: "Lato-Bold",
        fontSize: 24,
        color: colors.black,
    },
    learnMoreItemsWrapper: {
        marginTop: 20,
    },
    learnMoreItem: {
        width: 170,
        height: 180,
        justifyContent: "flex-end",
        marginRight: 20,
    },
    learnMoreItemImage: {
        borderRadius: 20,
    },
    learmMoreitemText: {
        fontFamily: "Lato-Bold",
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 20,
        marginVertical: 20,
    },
})

export default Home
