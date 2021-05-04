import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
export default function Comments({item, nav}) {
    console.log('Item: ', item)
    return <View style={[styles.container, styles.item]}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://cdn1.iconfinder.com/data/icons/education-colored-icons-vol-2/128/057-512.png'}}
            />
            <Text style={styles.text}>
                Post ID: {item.postId}
            </Text>
            <Text style={styles.text2}>
                Name: {item.name}
            </Text>
        <Text style={styles.text2}>
            Email: {item.email}
        </Text>
            <Text style={styles.text2}>
                Body: {item.body}
            </Text>
        <Button title={'comments details'} onPress={() => {
            nav.navigate('CommentsDetails', {data: item})
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
        height: 160
        ,
        margin: 5,
        borderRadius: 10
    },
});
