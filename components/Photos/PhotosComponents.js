import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Photos from "./Photos";
import {getPhotos} from "../../src/api/API";

// here is new branch
export default function UsersComponents(props) {
    const {navigation} = props

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
                    return <Photos item={item} nav={navigation}/>
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