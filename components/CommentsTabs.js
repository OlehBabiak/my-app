import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommentDetailsComponent from "../components/Users/Posts/Comments/CommentDetailsComponent"
const Tab = createBottomTabNavigator();

export default function CommentsTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="CommentsDetails" component={CommentDetailsComponent} />
        </Tab.Navigator>
    );
}