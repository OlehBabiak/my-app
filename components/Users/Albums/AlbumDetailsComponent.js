import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default function AlbumDetailsComponent(item) {
    console.log('Props: ', item.item)
    const {route, navigation} = item.item.item
    const {data} = route.params
    useEffect(()=> {
        navigation.setOptions({title: `Album details of User ID: ${data.userId}`})
    })
    return (
        <View style={styles.container}>
            <Text>User ID: {data.userId}</Text>
            <Text>ID: {data.id}</Text>
            <Text>Title: {data.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})