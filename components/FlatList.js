import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import User from "./User";

// here is new branch
export default function FlatLists(styles) {
    const [items, setItems] = useState([])

    const fetchData = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const json = await response.json()
        setItems(json)
    }
    fetchData()
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item})=>{
                    console.log(item)
                    return <User item={item}/>
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

