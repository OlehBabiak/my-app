import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PhotosDetailsComponent from "./Users/Albums/Photos/PhotoDetailsComponent";

const Tab = createBottomTabNavigator();

export default function PhotosTabs(props) {
    console.log('PhotosTabsProps', props)
    const {item} = props
    return (
        <Tab.Navigator>
            <Tab.Screen name="CommentsDetails" children={() => (
                <PhotosDetailsComponent item={item}/>
            )}/>
        </Tab.Navigator>
    );
}