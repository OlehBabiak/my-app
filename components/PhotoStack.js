import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import PhotosComponents from "./Users/Albums/Photos/PhotosComponents";
import PhotoScreen from "./PhotoScreen";



const  Stack = createStackNavigator()

export default function PhotoStack (item) {
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Photos'} children={() => (
                <PhotosComponents item={item}/>
            )}/>
            <Stack.Screen name={'PhotoScreen'} component={PhotoScreen}/>
        </Stack.Navigator>
    )
}