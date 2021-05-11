import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserDetailsComponent from "../components/Users/UserDetailsComponent";
import TodosComponents from "../components/Users/Todos/TodosComponents"
import PostStack from "./PostStack";
import AlbumStack from "./AlbumStack";
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
                <TodosComponents item={item}/>
            )} />
        </Tab.Navigator>
    )
}