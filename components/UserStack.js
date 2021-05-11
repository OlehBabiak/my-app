import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import UserScreen from "./UserScreen"
import UsersComponents from './Users/UsersComponents'


const  Stack = createStackNavigator()

export default function UserStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Users'} component={UsersComponents}/>
            <Stack.Screen name={'UserScreen'} component={UserScreen}/>
        </Stack.Navigator>
    )
}


