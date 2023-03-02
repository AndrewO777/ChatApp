import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableHighlight } from "react-native";
import { GlobalContext } from "../../globalContext";
import { firebase, hooks } from "../firebase/firebase";
import { AntDesign } from "@expo/vector-icons";


export default function ChatPage({navigation,route}){
	const [message, setMessage] = useState();
	const [messages, setMessages] = useState()
	const { user } = route.params;
	const {convoID } = user;
	const userID = user.id;

	const sendMessage = async () => {

		console.log(user)
		console.log(convoID)
		console.log(userID)
		console.log(message)
		
		try {
			const messagesRef = firebase.firestore().collection("Messages");
			const newDocumentRef = await messagesRef.add({
			convoID: convoID,
			sender: userID,
			message: message,
			});
			console.log('New document added with ID:', newDocumentRef.id);
		} catch (error) {
			console.log(error);
			}

	}

	useEffect(() => {
		const messagesRef = firebase.firestore().collection("Messages");
        messagesRef
        .onSnapshot(
            querySnapshot => {
                const messages = []
                querySnapshot.forEach((doc) => {
					if (doc.data().convoID === convoID)
                    messages.push(doc.data().message)
                })
                setMessages(messages)
				console.log('messages: ', messages)
            }
        )
    }, []);

	useEffect(() => {

		navigation.setOptions({ title: "Chatting With "+user.name });
	},[user,navigation]);
	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<Text>{ user.name }</Text>
			</ScrollView>
			<View>
				<Text>
					{messages}
				</Text>
			</View>
			
			<View style={ styles.inputWrapper }>
			{/* <View style={styles.addFileBtn}>
				<AntDesign
					name='pluscircle'
					size={50}
					onPress={() => console.log('pressed')}
				/>
			</View> */}
				<TextInput 
					style={ styles.input }
					onChangeText={(val) => setMessage(val)}
				/>
				<TouchableHighlight style={ styles.button }
					onPress={sendMessage}>
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
