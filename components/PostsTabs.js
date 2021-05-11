import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostDetailsComponent from "../components/Users/Posts/PostDetailsComponent"
import CommentsComponents from "../components/Users/Posts/Comments/CommentsComponents"
import CommentStack from "./CommentStack";
const Tab = createBottomTabNavigator();

export default function PostsTabs(props) {

    // console.log('PostsTabs ', props)
    return (
        <Tab.Navigator>
            <Tab.Screen name="PostsDetails" children={() => (
                <PostDetailsComponent item={props}/>
            )}/>
            <Tab.Screen name="Comments" children={() => (
                <CommentStack item={props}/>
            )} />
        </Tab.Navigator>
    );
}