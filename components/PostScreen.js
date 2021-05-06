import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PostsTabs from "./PostsTabs";

export default function PostScreen() {

    return(
        <NavigationContainer>
            <PostsTabs/>
        </NavigationContainer>
    )
}