import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default function PhotosDetailsComponent(props) {
    console.log('Props: ', props)
    const {route, navigation} = props
    const {data} = route.params
    useEffect(()=> {
        navigation.setOptions({title: 'Photos details'})
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