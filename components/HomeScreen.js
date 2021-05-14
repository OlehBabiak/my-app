import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>>Here is the home page!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red'
        },
});