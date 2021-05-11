import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default function PhotoDetailsComponent(item) {

    const {route, navigation} = item.item
    const {data} = route.params
    useEffect(()=> {
        navigation.setOptions({title: `Photos details of Album ID: ${data.albumId}`})
    })
    return (
        <View style={styles.container}>
            <Text>Album ID: {data.albumId}</Text>
            <Text>Title: {data.title}</Text>
            <Text>URL: {data.url}</Text>
            <Text>Thumbnail Url: {data.thumbnailUrl}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})