import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Camera} from "expo-camera";
import { StatusBar } from 'expo-status-bar';
import * as MediaLibrary from 'expo-media-library';


export default function CameraComponent(){
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);
    useEffect(()=>{
    (async ()=>{
        let {status} = await Camera.requestPermissionsAsync()
setHasPermission(status === 'granted')
    })()
}, [])

    if(hasPermission === null){
        return <View/>
    }
    if(hasPermission === false){
        return <Text>no access to camera!</Text>
    }

    async function takePicture() {
        if(hasPermission){
           let data =  await camera.takePictureAsync(null)
            console.log(data)
            await MediaLibrary.saveToLibraryAsync(data.uri)
        }
    }

    function flipBack() {
        setType(Camera.Constants.Type.back)
    }

    function flipFront() {
        setType(Camera.Constants.Type.front)
    }

    return(
        <View style={styles.container}>
            <Text>
                Camera component page
            </Text>
            <View style={styles.cameraContainer}>
                <Camera style={styles.fixedRatio} type={type} ref={(r)=> setCamera(r)}/>
                <Button title={'take picture'} onPress={takePicture}/>
                <Button title={'flip back'} onPress={flipBack}/>
                <Button title={'flip front'} onPress={flipFront}/>
            </View>
            <StatusBar style="light" />
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'silver'
    },
    cameraContainer: {
        flex: 1,
    },
    fixedRatio: {flex:1, aspectRatio: 1}
})