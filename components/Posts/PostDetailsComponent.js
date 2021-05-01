import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Post from "./Post";



export default function UserDetailsComponent(props) {
    console.log('Props: ', props)
    const {route, navigation} = props
    const {data} = route.params
    useEffect(()=> {
        navigation.setOptions({title: `Post details of user ID: ${data.userId}`})
    })
    return (
        <View style={styles.container}>
            <Text>User ID: {data.userId}</Text>
            <Text>Title: {data.title}</Text>
            <Text>Body: {data.body}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})