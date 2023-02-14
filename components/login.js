import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,
        Button } from 'react-native';


export default function Login() {


    return (

    <TouchableOpacity>
        <View style={styles.container}>
                <TextInput style={styles.input} placeholder=" Username" />
                <TextInput style={styles.input} placeholder=" Password" />
                            <Button style={styles.button} title="Login" />
        </View>
        <View style={styles.signUpContainer}>
            <Text>Don't have an account? 
                <Text style={styles.signUp}>  Sign Up</Text>
            </Text>

        </View>
    </TouchableOpacity>
)}



const styles = StyleSheet.create({

container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1,
},
input: {
    height: 40,
    width: 250,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
},
signUpContainer: {
    marginBottom: 20,   
},
signUp: {
    color: '#0000FF',
    marginLeft: 10,
},
button: {
    backgroundColor: '#fff',
    borderColor: '#0000FF',
    borderWidth: 2,
    width: 200,
    height: 40,
    borderRadius: 15,
},
text: {
    marginLeft: 10,
},
});