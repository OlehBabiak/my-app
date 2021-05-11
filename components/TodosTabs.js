import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoDetailsComponent from "./Users/Todos/TodoDetailsComponent"
const Tab = createBottomTabNavigator();

export default function TodosTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TodosDetails" component={TodoDetailsComponent} />
        </Tab.Navigator>
    );
}