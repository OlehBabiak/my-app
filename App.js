import React from 'react';
import UsersComponents from "./components/Users/UsersComponents";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CameraComponent from "./components/CameraComponent";
import PostComponents from "./components/Posts/PostsComponents";

const BottomTabNavigator = createBottomTabNavigator()

export default function App() {
  return (
   <NavigationContainer>
        <BottomTabNavigator.Navigator tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center'}}}>
            <BottomTabNavigator.Screen name={'users'} component={UsersComponents}/>
            <BottomTabNavigator.Screen name={'Post'} component={PostComponents}/>
            <BottomTabNavigator.Screen name={'Camera'} component={CameraComponent} options={{unmountOnBlur: true}}/>
        </BottomTabNavigator.Navigator>
   </NavigationContainer>
  );
}
