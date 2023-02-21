import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,
        Button, SafeAreaView, TouchableWithoutFeedback,
         KeyboardAvoidingView, Keyboard } from 'react-native';
import { auth } from '../firebase/firebase';

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
     const handleLogIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with: ', user.email);
            })
            .catch(error => alert(error.message));
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <SafeAreaView style={styles.main}>
        <View style={styles.container}>
        <View>
        </View>
        <View>
            <Text style={styles.welcome}>Welcome Back</Text>
        </View>
        
        <View>
            <TextInput 
                style={styles.input} 
                placeholder=" Email Address" 
                onChangeText={(val) => setEmail(val)}
            />
            <TextInput style={styles.input} 
                placeholder=" Enter Password" 
                onChangeText={(val) => setPassword(val)}
                secureTextEntry
            />  
            <View style={styles.btnWrapper}>
                <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={handleLogIn}
                >
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.signUpContainer}>
            <Text>Don't have an account?</Text> 
                <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                    <Text style={styles.signUp}>  Sign Up</Text>
                </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
)}



const styles = StyleSheet.create({
main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
},
container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
welcome: {
    fontSize: 40,
},
input: {
    height: 55,
    width: 300,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 30,
    margin: 20,
},
btnWrapper: {
    height: 55,
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
    borderRadius: 30,
},
loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
},
loginBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
},
signUpContainer: {
    position: 'absolute',
    bottom: 20, 
    textAlign: 'center',
    flexDirection: 'row',
},
signUp: {
    color: '#0000FF',
    marginLeft: 10,
},
});