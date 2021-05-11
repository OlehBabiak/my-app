import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CommentsComponents from "./Users/Posts/Comments/CommentsComponents";
import CommentScreen from "./CommentScreen";



const  Stack = createStackNavigator()

export default function CommentStack (item) {
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Comments'} children={() => (
                <CommentsComponents item={item}/>
            )}/>
            <Stack.Screen name={'CommentScreen'} component={CommentScreen}/>
        </Stack.Navigator>
    )
}
