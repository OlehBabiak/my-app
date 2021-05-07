import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Dimensions } from "react-native";


const width = Dimensions.get('window').width; //full width
export default function Album({item, nav}) {
    console.log('Item: ', item)
    return <View style={[styles.container, styles.item]}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://i.pinimg.com/originals/14/13/c0/1413c017e1527cba4c679c8559ae4f6b.png'}}
            />
            <Text style={styles.text}>
               User ID: {item.userId}
            </Text>
            <Text style={styles.text}>
               ID: {item.id}
            </Text>
            <Text style={styles.text2}>
                Title: {item.title}
            </Text>

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
        textAlign: 'center'
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
