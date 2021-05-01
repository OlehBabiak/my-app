import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default function UserDetailsComponent(props) {
    console.log('Props: ', props)
    const {route, navigation} = props
    const {data} = route.params
    useEffect(()=> {
        navigation.setOptions({title: `Comments name: ${data.name}`})
    })
    return (
        <View style={styles.container}>
            <Text>Post ID: {data.postId}</Text>
            <Text>Name: {data.name}</Text>
            <Text>Email: {data.email}</Text>
            <Text>Body: {data.body}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})