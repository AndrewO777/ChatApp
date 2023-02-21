import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/login'
import Signup from '../screens/signup'
import Home from '../screens/home'


const Stack = createNativeStackNavigator();


export default function Navigator() {
    
    return (
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#3d3d3d',
                }}
            }
                initialRouteName={"Login"}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign Up" component={Signup} />
                <Stack.Screen name="Home Screen" component={Home} />
            </Stack.Navigator>
    )
}