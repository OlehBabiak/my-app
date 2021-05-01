import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Comment from "./Comment";
import {getComments} from "../../src/api/API";

// here is new branch
export default function UsersComponents(props) {
    const {navigation} = props

    let [comments, setComments] = useState([])
    async function fetchData() {
        let comments = await getComments()
        setComments([...comments])
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={comments}
                renderItem={({item})=>{
                    return <Comment item={item} nav={navigation}/>
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