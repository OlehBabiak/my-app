import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserDetailsComponent from "../components/Users/UserDetailsComponent";
import PostsComponents from "../components/Users/Posts/PostsComponents"
import AlbumsComponents from "../components/Users/Albums/AlbumsComponents"
import TodosComponents from "../components/Users/Todos/TodosComponents"
const Tab = createBottomTabNavigator();

export default function UsersTabs(props) {
    console.log('User Props', props)
    const {item} = props
    return (
            <Tab.Navigator>
                <Tab.Screen name="UsersDetails" component={UserDetailsComponent(item)} />
                <Tab.Screen name="Posts" component={PostsComponents(item)} />
                <Tab.Screen name="Albums" component={AlbumsComponents(item)} />
                <Tab.Screen name="Todos" component={TodosComponents(item)} />
            </Tab.Navigator>
    );
}