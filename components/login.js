import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function Login() {


    return (

        <View style={styles.container}>
            <Text style={styles.text}>Username </Text>
                <TextInput style={styles.input} placeholder=" Username" />
            <Text style={styles.text}>Password </Text>
                <TextInput style={styles.input} placeholder=" Password" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
        </View>
)}



const styles = StyleSheet.create({

container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1,
},
input: {
    height: 40,
    width: 300,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
},
signUp: {
    color: '#0000FF',
    marginLeft: 10,
},
text: {
    marginLeft: 10,
},
});