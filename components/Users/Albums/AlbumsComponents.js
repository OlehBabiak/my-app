import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getAlbums} from "../../../src/api/API";
import Album from "./Album";


export default function AlbumsComponents(props) {
    const {route, navigation} = props.item.item
    const {data} = route.params
    let [albums, setAlbums] = useState([])
    async function fetchData() {
        let albums = await getAlbums()
        setAlbums([...albums])
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={albums}
                renderItem={({item})=>{
                    return data.id === item.userId && <Album item={item} nav={navigation}/>
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