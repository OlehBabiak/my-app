import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import { Dimensions } from "react-native";


const width = Dimensions.get('window').width; //full width
export default function User({item, nav}) {
    return <View style={[styles.container, styles.item]}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://www.iconbunny.com/icons/media/catalog/product/9/7/97.10-team-icon-iconbunny.jpg'}}
            />
            <Text style={styles.text}>
                ID: {item.id}
            </Text>
            <Text style={styles.text2}>
                Name: {item.name}
            </Text>
            <Text style={styles.text2}>
                website: {item.website}
            </Text>
        <Button title={'user details'} onPress={() => {
            nav.navigate('UserScreen', {data: item})
        }}/>
        </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9a9c41',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 25,
        color: 'green',
    },
    item: {
        backgroundColor: '#050405',
        marginBottom: 10,
        width: width
    },
    tinyLogo: {
        width: 160,
        height: 40,
        margin: 5,
        borderRadius: 10
    },
});
