import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import UserStack from "./components/UserStack"
import {createDrawerNavigator} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="UserStack">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="UserStack" component={UserStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}