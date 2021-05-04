import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getComments} from "../../../../src/api/API";
import Comments from "./Comments";


export default function CommentsComponents(props) {
    const {route, navigation} = props
    const {data} = route.params
    console.log('DATA: ', data)
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
                    return data.id === item.postId && <Comments item={item} nav={navigation}/>
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