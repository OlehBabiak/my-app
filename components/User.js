import React from 'react';
import {FlatList, StyleSheet, Text, View, Button, Image} from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
export default function User({item}) {
    return <View style={[styles.container, styles.item]}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://i.pinimg.com/originals/62/13/f2/6213f294c72418de409201d1842ffcb0.gif'}}
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
            <Button
                title={'some btn'}
                onPress={()=> console.log('press')}
            />
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
        height: 200,
        width: width
    },
    tinyLogo: {
        width: 190,
        height: 50
    },
});
