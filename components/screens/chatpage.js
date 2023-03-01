import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableHighlight } from "react-native";
import { GlobalContext } from "../../globalContext";
import { firebase } from "../firebase/firebase";

const messagesRef = firebase.firestore().collection("Messages");

export default function ChatPage({navigation,route}){
	const { user } = route.params;
	useEffect(() => {
		navigation.setOptions({ title: "Chatting With "+user.name });
	},[user,navigation]);
	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<Text>{ user.name }</Text>
			</ScrollView>
			<View style={ styles.inputWrapper }>
				<TextInput style={ styles.input }/>
				<TouchableHighlight style={ styles.button }
					onPress={() => {}}>
					<Text style={{ color: "#fff" }}>Send</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
inputWrapper: {
	position: "absolute",
	flexDirection: "row",
	bottom: 0,
	left: 0,
	right: 0,
	padding: 10,
	alignItems: "center"
},
input: {
    height: 55,
    width: 250,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 30,
    paddingLeft: 10,
    margin: 20,
    marginRight: 10
},
button: {
	backgroundColor: "#00aeef",
	borderRadius: 15,
	padding: 15,
	paddingLeft: 20,
	paddingRight: 20
}
});
