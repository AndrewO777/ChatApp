import React from 'react';
import Navigator from './components/routes/navigator'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer >
          <Navigator />
    </NavigationContainer>
 
    
  );
}


// const styles = StyleSheet.create({
 
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   }
// });

