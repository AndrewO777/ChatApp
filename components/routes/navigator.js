import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/login'
import Signup from '../screens/signup'
import Home from '../screens/home'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Stack = createNativeStackNavigator();



export default function Navigator() {

    const [username, setUsername] = useState();

const load = async () => {
    try {
        let username = await AsyncStorage.getItem('username')
        setUsername(username);
    } catch (err) {
        alert(err);
    }
}

useEffect(() => {
    load();
}, [])
    
    return (
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#3d3d3d',
                }}
            }
                initialRouteName={"Login"}>
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                />
                <Stack.Screen 
                    name="Sign Up" 
                    component={Signup} 
                />
                <Stack.Screen 
                    name="Home Screen" 
                    component={Home} 
                    options={{title: (username)}}
                />
            </Stack.Navigator>
    )
}