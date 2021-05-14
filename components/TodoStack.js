import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import TodosComponents from "./Users/Todos/TodosComponents";
import TodoDetailsComponent from "./Users/Todos/TodoDetailsComponent";

const  Stack = createStackNavigator()
export default function TodoStack(props) {

    return(
        <Stack.Navigator>
            <Stack.Screen name="TodosComponents" children={() => (
                <TodosComponents item={props}/>
            )} />
            <Stack.Screen name="TodosDetails" component={TodoDetailsComponent} />
        </Stack.Navigator>
    )
}