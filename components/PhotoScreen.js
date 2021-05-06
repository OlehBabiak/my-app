import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PhotosTabs from "./PhotosTabs";

export default function PhotoScreen() {

    return(
        <NavigationContainer>
            <PhotosTabs/>
        </NavigationContainer>
    )
}