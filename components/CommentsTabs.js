import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommentDetailsComponent from "../components/Users/Posts/Comments/CommentDetailsComponent"
const Tab = createBottomTabNavigator();

export default function CommentsTabs(props) {
    const {item} = props
    return (
        <Tab.Navigator>
            <Tab.Screen name="CommentsDetails" children={() => (
                <CommentDetailsComponent item={item}/>
            )}/>
        </Tab.Navigator>
    );
}