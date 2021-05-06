import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import UsersTabs from "./UsersTabs";

export default function UserScreen() {

    return(
        <NavigationContainer independent={true}>
            <UsersTabs/>
        </NavigationContainer>
    )
}