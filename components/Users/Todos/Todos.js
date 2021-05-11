import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
export default function Todos({item, nav}) {
    console.log('Item: ', item)
    return <View style={[styles.container, styles.item]}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://icons-for-free.com/iconfiles/png/512/clipboard+inventory+list+report+tasks+todo+icon-1320184207175705647.png'}}
            />
            <Text style={styles.text}>
                User ID: {item.userId}
            </Text>
            <Text style={styles.text2}>
                Title: {item.title}
            </Text>
            <Text style={styles.text2}>
                Completed: {item.completed.toString()}
            </Text>
        <Button title={'todo details'} onPress={() => {
            nav.navigate('TodoScreen', {data: item})
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
        height: 160,
        margin: 5,
        borderRadius: 10
    },
});
