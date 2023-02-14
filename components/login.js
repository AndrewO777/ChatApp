import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,
        Button } from 'react-native';


export default function Login() {


    return (

    <TouchableOpacity>
        <View>
            <Text style={styles.welcome}>Welcome Back</Text>
        </View>
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
welcome: {
    fontSize: 40,
    marginTop: 80,
    fontWeight: 'bold',
},
input: {
    height: 40,
    width: 250,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 15,
    margin: 20,
},
signUpContainer: {
    marginTop: 20,
    marginBottom: 20,   
    marginLeft: 40,
},
signUp: {
    color: '#0000FF',
    marginLeft: 10,
},
text: {
    marginLeft: 10,
},
});