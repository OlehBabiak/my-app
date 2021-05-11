import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import AlbumScreen from "./AlbumScreen";
import AlbumsComponents from "./Users/Albums/AlbumsComponents";



const  Stack = createStackNavigator()

export default function AlbumStack(item) {
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Albums'} children={() => (
                <AlbumsComponents item={item}/>
            )}/>
            <Stack.Screen name={'AlbumScreen'} component={AlbumScreen}/>
        </Stack.Navigator>
    )
}
