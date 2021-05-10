import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getPosts} from "../../../src/api/API";
import Post from "./Post";


export default function PostsComponents(props) {
    console.log('Post props: ', props)
    const {route, navigation} = props
    const {data} = route.params
    let [posts, setPosts] = useState([])
    async function fetchData() {
        let posts = await getPosts()
        setPosts([...posts])
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({item})=>{
                    return data.id === item.userId && <Post item={item} nav={navigation}/>
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