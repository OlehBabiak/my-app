import React from "react";
import {StyleSheet} from 'react-native'
import {createDrawerNavigator} from "@react-navigation/drawer";
import PostComponents from "./Posts/PostsComponents"
import PhotosComponents from "./Photos/PhotosComponents"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const BottomTabNavigator = createBottomTabNavigator()
export default function PostDrawer () {

    return (
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen name="Posts" options={{title: 'Posts'}} component={PostComponents} />
            <BottomTabNavigator.Screen name="Photos" options={{title: 'Photos'}} component={PhotosComponents} />
        </BottomTabNavigator.Navigator>
    )
}