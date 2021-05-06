import * as React from 'react';
import Navigator from "./indexStackNav";
import {View} from 'react-native';
import DrowNav from "./indexDrawNav";

export default function App() {
    return (
        <View>
            <DrowNav/>
            <Navigator/>
        </View>
    );
}