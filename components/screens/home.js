import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, 
        ScrollView, Modal, TouchableOpacity,
        TouchableWithoutFeedback, Keyboard } from 'react-native'
import Chat from "./chat";
import ChatPage from "./chatpage";
import UserList from "./userList";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../firebase/firebase';
import { GlobalContext} from '../../globalContext';

export default function Home({navigation}) {
    const [usernameModalVisible, setUsernameModalVisible] = useState(false);
    const {username, setUsername} = useContext(GlobalContext);
    const {userID, setUserID} = useContext(GlobalContext);
    const [isUsernameSet, setIsUsernameSet] = useState();
    const [users, setUsers] = useState([
	{ id: 1, name: "Test User 1" },
	{ id: 2, name: "Test User 2" },
	{ id: 3, name: "Test User 3" }
    ]);
    
    const HandleUserPress = (user) => { navigation.navigate("Chat Page", { user }); };

    const handleSubmit = () => {
        setIsUsernameSet(true);
       
    }

    const createUser = async () => {
        try {
            await AsyncStorage.setItem('username', username)
            setIsUsernameSet(true);
        } catch (err) {
            alert(err)
        }
        setUsernameModalVisible(false)
    }

    const load = async () => {
        try {
            let username = await AsyncStorage.getItem('username');
        } catch (err) {
            alert(err);
        }
    }

    const signOut = async () => {
        auth
            .signOut()
            .then(() => {
                console.log('Singed Out')
                navigation.navigate("Login")
            })
    }
    
    useEffect(() => {
        if (username !== null) {
            setUsernameModalVisible(false);
        }
          navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => signOut()}>
                    <Text style={{color: 'white', fontSize: 20}}>Log Out</Text>
                </TouchableOpacity>
            )
        })
   },[])
    
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
		<UserList users = { users } onPress={ HandleUserPress }/>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    input: {
        height: 55,
        width: 300,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 30,
        margin: 20,
        paddingLeft: 10,
        alignSelf: 'center',
    },
    btnWrapper: {
        height: 55,
        alignSelf: 'center',
        marginTop: 12,
        backgroundColor: '#3d3d3d',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        width: 350,
        borderRadius: 30,
    },
    setUsernameBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
    },
    usernameBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 50,
    }
})
