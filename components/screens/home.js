import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, 
        ScrollView, Modal, TouchableOpacity,
        TouchableWithoutFeedback, Keyboard } from 'react-native'
import Chat from "./chat"

export default function Home() {
    const [usernameModalVisible, setUsernameModalVisible] = useState(false);
    const [username, setUsername] = useState();
    const [isUsernameSet, setIsUsernameSet] = useState(false);
    
    const handleSubmit = () => {
        setIsUsernameSet(true);
       
    }
    
    useEffect(() => {
        if (!isUsernameSet) {
            setUsernameModalVisible(true);
        }
   },[])

    const chats = [];
    for (let i = 0; i < 20; ++i){
    	chats.push(<Chat key={i} name="test user"/>);
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
    	<ScrollView>
            <Modal
                style={styles.container}
                visible={usernameModalVisible}
                presentationStyle="formSheet"
            >
                <View>
                    <Text style={styles.text}>Create User</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Username"
                        onChangeText={(val) => setUsername(val)}
                    />
                    <View style={styles.btnWrapper}>
                    <TouchableOpacity 
                        style={styles.setUsernameBtn}
                        onPress={() => setUsernameModalVisible(false)}
                        >
                        <Text style={styles.usernameBtnText}>Submit</Text>
                    </TouchableOpacity>
                    </View>
                </View> 
            </Modal>
	        {chats}
    	</ScrollView>
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