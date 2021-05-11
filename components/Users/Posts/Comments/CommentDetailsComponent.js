import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default function CommentDetailsComponent(item) {
    console.log('Props: ', item.item)
    const {route, navigation} = item.item
    const {data} = route.params
    useEffect(()=> {
        navigation.setOptions({title: `Comments details of User ID: ${data.postId}`})
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