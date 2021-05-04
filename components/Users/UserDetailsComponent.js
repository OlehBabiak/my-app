import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default function UserDetailsComponent(props) {
    console.log('Props: ', props)
    const {route, navigation} = props
    const {data} = route.params
    useEffect(()=> {
        navigation.setOptions({title: data.name})
    })
    return (
        <View style={styles.container}>
            <Text>ID: {data.id}</Text>
            <Text>Name: {data.name}</Text>
            <Text>User name: {data.username}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})