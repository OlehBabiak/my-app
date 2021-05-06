import * as React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', background: 'red' }}>
            <Text>Here is the home page</Text>
        </View>
    );
}