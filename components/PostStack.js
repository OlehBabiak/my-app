import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import PostsComponents from "./Users/Posts/PostsComponents";
import PostScreen from "./PostScreen";



const  Stack = createStackNavigator()

export default function PostStack(item) {
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Posts'} children={() => (
                <PostsComponents item={item}/>
            )}/>
            <Stack.Screen name={'PostScreen'} component={PostScreen}/>
        </Stack.Navigator>
    )
}
