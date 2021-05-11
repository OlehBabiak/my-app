import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlbumsDetailsComponent from "../components/Users/Albums/AlbumDetailsComponent"
import PhotoStack from "./PhotoStack";
const Tab = createBottomTabNavigator();

export default function AlbumsTabs(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="AlbumsDetails" children={() => (
                <AlbumsDetailsComponent item={props}/>
            )}/>
            <Tab.Screen name="Photos" children={() => (
                <PhotoStack item={props}/>
            )} />
        </Tab.Navigator>
    );
}