import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default function TodoDetailsComponent(item) {
    console.log('Props todo: ', item)
    const {route, navigation} = item
    const {data} = route.params
    useEffect(()=> {
        navigation.setOptions({title: `Todos details of User ID: ${data.userId}`})
    })
    return (
        <View style={styles.container}>
            <Text>User ID: {data.userId}</Text>
            <Text>Title: {data.title}</Text>
            <Text>Completed: {data.completed.toString()}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})