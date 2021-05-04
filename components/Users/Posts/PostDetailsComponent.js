import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default function PostDetailsComponent(props) {
    console.log('Props: ', props)
    const {route, navigation} = props
    const {data} = route.params
    useEffect(()=> {
        navigation.setOptions({title: `Post details of User ID: ${data.userId}`})
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