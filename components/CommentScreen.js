import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CommentsTabs from "./CommentsTabs";

export default function CommentScreen() {

    return(
        <NavigationContainer>
          <CommentsTabs/>
        </NavigationContainer>
    )
}