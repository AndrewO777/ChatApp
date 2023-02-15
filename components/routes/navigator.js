import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/login'
import Signup from '../screens/signup'


// const screens = {
//     Login: {
//         screen: Login
//     },
//     Signup: {
//         screen: Signup
//     }
// }


const Stack = createNativeStackNavigator();


export default function Navigator() {
    return (
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign Up" component={Signup} />
            </Stack.Navigator>
    )
}