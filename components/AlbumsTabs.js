import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlbumsDetailsComponent from "../components/Users/Albums/AlbumDetailsComponent"
import PhotosComponents from "../components/Users/Albums/Photos/PhotosComponents"
const Tab = createBottomTabNavigator();

export default function AlbumsTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="AlbumsDetails" component={AlbumsDetailsComponent} />
            <Tab.Screen name="Photos" component={PhotosComponents} />
        </Tab.Navigator>
    );
}