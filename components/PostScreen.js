import React from 'react';
import PostsTabs from "./PostsTabs";

export default function PostScreen(props) {
    console.log('PostScreen ', props)
    return(
            <PostsTabs item={props}/>
    )
}