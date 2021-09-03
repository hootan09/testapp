import React from 'react';
import { View, Text, Button } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title="Details" onPress={()=> navigation.navigate("Details")} />
        </View>
    )
}

export default Home
