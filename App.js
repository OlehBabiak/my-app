import * as React from 'react';
import Navigator from "./indexStackNav";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import UsersComponents from "./components/Users/UsersComponents";
import UserScreen from "./components/UserScreen"
import {createDrawerNavigator} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Users">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Users" component={UsersComponents}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}