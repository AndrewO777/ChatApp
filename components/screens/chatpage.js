import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableHighlight, FlatList, Image } from "react-native";
import { GlobalContext } from "../../globalContext";
import { firebase, hooks } from "../firebase/firebase";
import { AntDesign } from "@expo/vector-icons";


export default function ChatPage({navigation,route}){
	const [message, setMessage] = useState();
	const [messages, setMessages] = useState()
	const { user } = route.params;
	const {convoID } = user;
	const { userID, setUserID } = useContext(GlobalContext);

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
                    messages.push({message:doc.data().message,sender:doc.data().sender})
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
			<FlatList
				data = { messages }
				renderItem = {({ item }) => (
					<View style={ item.sender == userID ? styles.itemMe : styles.item }>
					{ item.sender != userID ? <Image 
		source={{ width:50,height:50,uri:"https://picsum.photos/50"}} style={ styles.picture }/>
						: null }
						<Text>{ item.message }</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>

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
},
item: {
	padding: 10,
	margin: 5,
	marginLeft: 10,
	marginRight: 10,
	flexDirection: "row",
	alignItems: "center",
	alignSelf: "start",
	backgroundColor: "#00aeef",
	borderRadius: 50
},
itemMe: {
	padding: 10,
	margin: 5,
	marginLeft: 10,
	marginRight: 10,
	flexDirection: "row",
	alignItems: "center",
	alignSelf: "flex-end",
	justifyContent: "right",
	backgroundColor: "green",
	borderRadius: 50
},
picture: {
	marginRight: 10,
	borderRadius: 50
},
center: {
	alignItems: "center",
	justifyContent: "center"
}
});
