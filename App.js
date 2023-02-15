import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import Signup from './components/signup';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
        <View style={styles.content}>
          <Signup />
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

