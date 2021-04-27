import React from 'react';
import {FlatList, StyleSheet, Text, View, Button, Image, Alert} from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
export default function User({item}) {
    return <View style={[styles.container, styles.item]}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'data:image/jpeg;base64,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'}}
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
                title={'press here'}
                onPress={() => Alert.alert('You press some button')}
                color="#f194ff"
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
        width: 160,
        height: 40
    },
});
