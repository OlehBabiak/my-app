import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PhotosDetailsComponent from "./Users/Albums/Photos/PhotoDetailsComponent";
const Tab = createBottomTabNavigator();

export default function PhotosTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="PhotosDetails" component={PhotosDetailsComponent} />
        </Tab.Navigator>
    );
}