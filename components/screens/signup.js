import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,
        Button, SafeAreaView } from 'react-native';


export default function Signup({navigation}) {


    return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity>
        <View>
            <Text style={styles.welcome}>Welcome</Text>
        </View>
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder=" Username" />
            <TextInput style={styles.input} placeholder=" Enter Password" />  
            <TextInput style={styles.input} placeholder=" Confirm Password" />
            <Button style={styles.button} title="Sign Up" />
        </View>
        <View style={styles.signUpContainer}>
            <Text>Already have an account? 
             <Text style={styles.signUp} onPress={() => navigation.navigate("Login")}>  Login</Text>
            </Text>

        </View>
    </TouchableOpacity>
    </SafeAreaView>
)}



const styles = StyleSheet.create({

container: {
    justifyContent: 'center',
    flex: 1,
},
welcome: {
    fontSize: 40,
    marginLeft: 50,
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