import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostDetailsComponent from "../components/Users/Posts/PostDetailsComponent"
import CommentsComponents from "../components/Users/Posts/Comments/CommentsComponents"
const Tab = createBottomTabNavigator();

export default function PostsTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="PostsDetails" component={PostDetailsComponent} />
            <Tab.Screen name="Comments" component={CommentsComponents} />
        </Tab.Navigator>
    );
}