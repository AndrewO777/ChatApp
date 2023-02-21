import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,
        Button, SafeAreaView, TouchableWithoutFeedback, Keyboard,
        KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { auth } from '../firebase/firebase';


export default function Signup({navigation}) {

 // text fields input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

 // error messages
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

 // boolean fields
    const [isSetPassword, setIsSetPassword] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);
    const [isMatched, setIsMatched] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

 // checks to see if passwords match
    const passwordCheck = () => {
        if (password != confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            setIsMatched(false);
        }
        else 
        {
            setConfirmPasswordError('');
            setIsMatched(true);
        }
    }

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
            })
            .catch(error => alert(error.message));
    };

    const handlePress = () => {
        setIsPressed(true);
        if (isMatched) {
            handleSignUp();
        }
    }

    useEffect (() => {
        passwordCheck();
    }, [password, confirmPassword]); 

    return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
      <SafeAreaView style={styles.main}>
        <KeyboardAvoidingView behavior='padding'>
        <View style={styles.container}>
        <View>
            <Text style={styles.welcome}>New Account</Text>
        </View>
        
        <View>
            <TextInput 
                style={styles.input} 
                placeholder=" Email Address" 
                onChangeText={(val) => setEmail(val)}
            />
            <Text>{usernameError}</Text>
            <TextInput 
                style={styles.input} 
                placeholder=" Enter Password" 
                onChangeText={(val) => setPassword(val)}
                secureTextEntry
            />  
            <TextInput 
                style={styles.input} 
                placeholder=" Confirm Password" 
                onChangeText={(val) => setConfirmPassword(val)}
                secureTextEntry
            />
            <Text style={styles.error}>{(isPressed) && confirmPasswordError}</Text>

            <View style={styles.btnWrapper}>
                <TouchableOpacity 
                    style={styles.signUpBtn}
                    onPress={handlePress}
                    >
                    <Text style={styles.signUpBtnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.signUpContainer}>
            <Text>Already have an account?</Text> 
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.signUp}>  Login</Text>
                </TouchableOpacity>
        </View>
        </View>
    </KeyboardAvoidingView>
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
signUpBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
},
signUpBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
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
error: {
    color: 'red',
},
});