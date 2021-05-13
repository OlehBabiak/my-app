import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserDetailsComponent from "./Users/UserDetailsComponent";
import PostStack from "./PostStack";
import AlbumStack from "./AlbumStack";
import TodoStack from "./TodoStack";
const Tab = createBottomTabNavigator();

export default function UserScreen(item) {

    return(
        <Tab.Navigator>
            <Tab.Screen name="UsersDetails"  children={() => (
                <UserDetailsComponent item={item}/>
            )} />

            <Tab.Screen name="Posts" children={() => (
                <PostStack item={item}/>
            )} />

            <Tab.Screen name="Album" children={() => (
                <AlbumStack item={item}/>
            )} />
            <Tab.Screen name="Todos" children={() => (
                <TodoStack item={item}/>
            )} />
        </Tab.Navigator>
    )
}