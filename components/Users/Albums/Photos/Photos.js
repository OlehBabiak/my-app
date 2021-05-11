import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import { Dimensions } from "react-native";


const width = Dimensions.get('window').width; //full width
export default function Photos({item, nav}) {
    console.log('Item: ', item)
    return <View style={[styles.container, styles.item]}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://img.icons8.com/plasticine/2x/compact-camera.png'}}
                />
            <Text style={styles.text}>
                Album ID: {item.albumId}
            </Text>
            <Text style={styles.text2}>
                Title: {item.title}
            </Text>
        <Text style={styles.text2}>
            URL: {item.url}
        </Text>
            <Text style={styles.text2}>
                Thumbnail Url: {item.thumbnailUrl}
            </Text>
        <Button title={'photos details'} onPress={() => {
            nav.navigate('PhotoScreen', {data: item})
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
        width: 300,
        height: 100,
        margin: 5,
        borderRadius: 10
    },
});
