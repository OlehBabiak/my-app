import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getTodos} from "../../../src/api/API";
import Todos from "./Todos";


export default function TodosComponents(props) {
    const {route, navigation} = props.item.item
    const {data} = route.params
    let [todos, setTodos] = useState([])
    async function fetchData() {
        let todos = await getTodos()
        setTodos([...todos])
    }

    console.log('todos: ',todos)
    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({item})=>{
                    return data.id === item.userId &&  <Todos item={item} nav={navigation}/>
                }}
                keyExtractor={(item, index) => index.toString()}
            />
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