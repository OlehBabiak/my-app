import React from 'react';
import UsersComponents from "./components/Users/UsersComponents";
import PostDrawer from "./components/PostDrawer"
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

export default function App() {
  return (
   <NavigationContainer>
        <Drawer.Navigator tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center'}}}>
            <Drawer.Screen name={'users'} component={UsersComponents}/>
            <Drawer.Screen name={'PostDrawer'} component={PostDrawer}/>
        </Drawer.Navigator>
   </NavigationContainer>
  );
}
//HW2