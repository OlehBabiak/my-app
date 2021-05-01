import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import User from "./User";
import {getUsers} from "../../src/api/API";

// here is new branch
export default function UsersComponents(props) {
    const {navigation} = props
    let [users, setUsers] = useState([])
    console.log(users)
    async function fetchData() {
        let users = await getUsers()
        setUsers([...users])
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({item})=>{
                    return <User item={item} nav={navigation}/>
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9a9c41',
        alignItems: 'center',
        justifyContent: 'center',
    },
});