import React from 'react';
import PhotosDetailsComponent from "./components/Users/Albums/Photos/PhotoDetailsComponent"
import TodosDetailsComponent from "./components/Users/Todos/TodoDetailsComponent"
import UserScreen from "./components/UserScreen"
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


const StackNavigator = createStackNavigator()
export default function Navigator() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                {/*<StackNavigator.Screen name={'PhotosDetails'} component={PhotosDetailsComponent}/>*/}
                <StackNavigator.Screen name={'UserScreen'} component={UserScreen}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}