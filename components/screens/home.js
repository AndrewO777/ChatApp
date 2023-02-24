import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native'
import Chat from "./chat"

export default function Home() {
    const chats = [];
    for (let i = 0; i < 20; ++i){
    	chats.push(<Chat key={i} name="test user"/>);
    }
    return (
    	<ScrollView>
	    {chats}
    	</ScrollView>
    )
}
