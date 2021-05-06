import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserDetailsComponent from "../components/Users/UserDetailsComponent";
import PostsComponents from "../components/Users/Posts/PostsComponents"
import AlbumsComponents from "../components/Users/Albums/AlbumsComponents"
import TodosComponents from "../components/Users/Todos/TodosComponents"
const Tab = createBottomTabNavigator();

export default function UsersTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="UsersDetails" component={UserDetailsComponent} />
            <Tab.Screen name="Posts" component={PostsComponents} />
            <Tab.Screen name="Albums" component={AlbumsComponents} />
            <Tab.Screen name="Todos" component={TodosComponents} />
        </Tab.Navigator>
    );
}