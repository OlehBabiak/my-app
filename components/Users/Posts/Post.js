import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
export default function Post({item, nav}) {
    console.log('Item: ', item)
    return <View style={[styles.container, styles.item]}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://www.clipartmax.com/png/middle/168-1681777_recent-posts-small-medium-enterprise-icon.png'}}
            />
            <Text style={styles.text}>
                User ID: {item.userId}
            </Text>
            <Text style={styles.text2}>
                Title: {item.title}
            </Text>
            <Text style={styles.text2}>
                Body: {item.body}
            </Text>
        <Button title={'post details'} onPress={() => {
            nav.navigate('PostScreen')
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
        textAlign: 'center'
    },
    item: {
        backgroundColor: '#050405',
        marginBottom: 10,
        width: width
    },
    tinyLogo: {
        width: 160,
        height: 80
        ,
        margin: 5,
        borderRadius: 10
    },
});
