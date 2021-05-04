import React from 'react';
import UsersComponents from "./components/Users/UsersComponents";
import UserDetailsComponent from "./components/Users/UserDetailsComponent";
import PostsComponents from "./components/Users/Posts/PostsComponents"
import PostDetailsComponent from "./components/Users/Posts/PostDetailsComponent"
import CommentsComponents from "./components/Users/Posts/Comments/CommentsComponents"
import CommentDetailsComponent from "./components/Users/Posts/Comments/CommentDetailsComponent"
import AlbumsComponents from "./components/Users/Albums/AlbumsComponents"
import AlbumsDetailsComponent from "./components/Users/Albums/AlbumDetailsComponent"
import PhotosComponents from "./components/Users/Albums/Photos/PhotosComponents"
import PhotosDetailsComponent from "./components/Users/Albums/Photos/PhotoDetailsComponent"
import TodosComponents from "./components/Users/Todos/TodosComponents"
import TodosDetailsComponent from "./components/Users/Todos/TodoDetailsComponent"
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


const StackNavigator = createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
       <StackNavigator.Navigator>
           <StackNavigator.Screen name={'Users'} component={UsersComponents}/>
           <StackNavigator.Screen name={'UsersDetails'} component={UserDetailsComponent}/>
           <StackNavigator.Screen name={'Posts'} component={PostsComponents}/>
           <StackNavigator.Screen name={'PostsDetails'} component={PostDetailsComponent}/>
           <StackNavigator.Screen name={'Comments'} component={CommentsComponents}/>
           <StackNavigator.Screen name={'CommentsDetails'} component={CommentDetailsComponent}/>
           <StackNavigator.Screen name={'Albums'} component={AlbumsComponents}/>
           <StackNavigator.Screen name={'AlbumsDetails'} component={AlbumsDetailsComponent}/>
           <StackNavigator.Screen name={'Photos'} component={PhotosComponents}/>
           <StackNavigator.Screen name={'PhotosDetails'} component={PhotosDetailsComponent}/>
           <StackNavigator.Screen name={'Todos'} component={TodosComponents}/>
           <StackNavigator.Screen name={'TodosDetails'} component={TodosDetailsComponent}/>
       </StackNavigator.Navigator>
   </NavigationContainer>
  );
}
