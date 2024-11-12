import React, { useState } from 'react'; 
import { useRouter } from 'expo-router'; 
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    Alert.alert(
      'Login successful',
      '',
      [
        {
          text: 'OK',
          onPress: () => {
            router.push('/home');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      source={require('../assets/hansy.jpg')} // Update to your desired background image
      style={styles.backgroundImage}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>GAINZ</Text>
        <Text style={styles.subtitle}>Protein Shake</Text>

        <View style={styles.loginContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="gray"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="gray"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Doesn't have an account?</Text>
            <TouchableOpacity style={styles.button1} onPress={() => router.push('/register')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjusted for better contrast
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 70,
    color: '#FF6347', // Match with GAINZ theme
    textAlign: 'center',
    textShadowColor: 'black', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: 'black', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  loginContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(250, 250, 250, 0.55)', // Semi-transparent background
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6347', // Match with GAINZ theme
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button1: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6347', // Match with GAINZ theme
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    marginTop: 20, 
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
});
