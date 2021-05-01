import React from 'react';
import {View, StyleSheet} from 'react-native';
import UsersComponents from "./components/Users/UsersComponents";
import UserDetailsComponent from "./components/Users/UserDetailsComponent";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const StackNavigator = createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
       <StackNavigator.Navigator>
           <StackNavigator.Screen name={'Users'} component={UsersComponents}/>
           {/*<StackNavigator.Screen name={'Posts'} component={PostsComponents}/>*/}
           <StackNavigator.Screen name={'UsersDetails'} component={UserDetailsComponent}/>
       </StackNavigator.Navigator>
   </NavigationContainer>
  );
}
//HW2