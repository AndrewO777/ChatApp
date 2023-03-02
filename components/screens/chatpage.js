import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, FlatList, Image, KeyboardAvoidingView, Keyboard, SafeAreaView} from "react-native";
import { GlobalContext } from "../../globalContext";
import { firebase, hooks } from "../firebase/firebase";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";


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
			setMessage('')

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
	
	
		
		
		
		<View style={{flex: 1, backgroundColor: '#c0c0c0'}}>
			<FlatList
				data = { messages }
				renderItem = {({ item }) => (
					<View style={ item.sender == userID ? styles.itemMe : styles.item }>
							{ item.sender != userID ? <Image 
							source={{ width:40,height:40,uri:"https://picsum.photos/50"}} style={ styles.picture }/>
							: null }
								<Text style={{color: 'white', fontSize: '20%'}}>{ item.message }</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
				<KeyboardAvoidingView 
					behavior="position"
					keyboardVerticalOffset={60}
				>
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
								clearButtonMode='always'
								value={message}
								selectionColor='white'
								

							/>
							<MaterialCommunityIcons
								name='send-circle'
								color='#3d3d3d'
								size= '60%'
								onPress={() => 
									{sendMessage()
									Keyboard.dismiss()}
								}
							/>
							
							{/* <TouchableHighlight style={ styles.button }
								onPress={sendMessage}>
								<Text style={{ color: "#fff" }}>Send</Text>
							</TouchableHighlight> */}
							
					</View>
				</KeyboardAvoidingView>
		</View>
						
						
			
	);
}

const styles = StyleSheet.create({
// container: {
// 	flex: 1
// },
inputWrapper: {
	position: "absolute",
	flexDirection: "row",
	bottom: 0,
	left: 0,
	right: 0,
	padding: 10,
	alignItems: "center",
	backgroundColor: "#c0c0c0"
},
input: {
    height: 55,
    width: '80%',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 30,
    paddingLeft: 10,
    margin: 0,
    marginRight: 10,
	color: '#fff',
	backgroundColor: "#3d3d3d",
	fontSize: '20%'
},
button: {
	backgroundColor: "#00aeef",
	width: '20%',
	borderRadius: 15,
	padding: 15,
	paddingLeft: 20,
	paddingRight: 20
},
item: {
	padding: 5,
	margin: 5,
	marginLeft: 10,
	marginRight: 10,
	flexDirection: "row",
	alignItems: "center",
	alignSelf: "start",
	backgroundColor: "#476a6f",
	borderRadius: 50,
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
	backgroundColor: "#7eb09b",
	borderRadius: 50,
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
