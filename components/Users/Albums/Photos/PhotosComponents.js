import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getPhotos} from "../../../../src/api/API";
import Photos from "./Photos";


export default function PhotosComponents(props) {
    console.log('PhotosProps: ', props)
    const {route, navigation} = props.item.item.item
    const {data} = route.params
    let [photos, setPhotos] = useState([])
    async function fetchData() {
        let photos = await getPhotos()
        setPhotos([...photos])
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                renderItem={({item})=>{
                    return data.id === item.albumId && <Photos item={item} nav={navigation}/>
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