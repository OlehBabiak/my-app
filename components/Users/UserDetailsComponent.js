import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getUser, getUsers} from "../../src/api/API";
import User from "./User";


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