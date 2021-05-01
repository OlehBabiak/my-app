import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from "./components/main/HomeScreen";
import UsersComponents from "./components/Users/UsersComponents";
import UserDetailsComponent from "./components/Users/UserDetailsComponent";
import PostsComponents from "./components/Posts/PostsComponents"
import PostsDetailsComponent from "./components/Posts/PostDetailsComponent"
import CommentsComponents from './components/Comments/CommentsComponents'
import CommentsDetailsComponent from './components/Comments/CommentsDetailsComponent'
import PhotosComponents from "./components/Photos/PhotosComponents"
import PhotosDetailsComponent from "./components/Photos/PhotosDetailsComponent"
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name={'Home'} component={HomeScreen}/>
           <Stack.Screen name={'Users'} component={UsersComponents}/>
           <Stack.Screen name={'UsersDetails'} component={UserDetailsComponent}/>
           <Stack.Screen name={'Posts'} component={PostsComponents}/>
           <Stack.Screen name={'PostsDetails'} component={PostsDetailsComponent}/>
           <Stack.Screen name={'Comments'} component={CommentsComponents}/>
           <Stack.Screen name={'CommentsDetails'} component={CommentsDetailsComponent}/>
           <Stack.Screen name={'Photos'} component={PhotosComponents}/>
           <Stack.Screen name={'PhotosDetails'} component={PhotosDetailsComponent}/>
           {/*<Stack.Screen name={'Todos'} component={TodosComponents}/>*/}
           {/*<Stack.Screen name={'TodosDetails'} component={TodosDetailsComponent}/>*/}
           {/*<Stack.Screen name={'Albums'} component={AlbumsComponents}/>*/}
           {/*<Stack.Screen name={'AlbumsDetails'} component={AlbumsDetailsComponent}/>*/}
       </Stack.Navigator>
   </NavigationContainer>
  );
}
//HW2