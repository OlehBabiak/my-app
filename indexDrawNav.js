import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigator from "./indexStackNav";
import UsersComponents from "./components/Users/UsersComponents";
import HomeScreen from "./components/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
export default function DrowNav() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Users" component={UsersComponents} />
            </Drawer.Navigator>
        </NavigationContainer>,
        <Navigator/>
    );
}