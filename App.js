import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatLists from "./components/FlatList";




export default function App() {
  return (
    <View style={styles.container}>
      <FlatLists styles={styles}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9a9c41',
        alignItems: 'center',
        justifyContent: 'center',
    },
});