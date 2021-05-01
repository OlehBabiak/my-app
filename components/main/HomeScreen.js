import React, {useEffect, useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';


export default function HomeScreen(props) {
    const {navigation} = props
    return(
        <View>
            <Button title={'Go to Users'} onPress={() => navigation.navigate('Users')}/>
            <Button title={'Posts'} onPress={() => navigation.navigate('Posts')}/>
            <Button title={'Comments'} onPress={() => navigation.navigate('Comments')}/>
            <Button title={'Photos'} onPress={() => navigation.navigate('Photos')}/>
            <Button title={'Todos'} />
            <Button title={'Albums'} />
        </View>
    )
}