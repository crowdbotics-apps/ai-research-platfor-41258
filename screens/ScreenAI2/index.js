import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {// Handle login logic here
  };

  const handleForgotPassword = () => {// Handle forgot password logic here
  };

  return <View style={styles.container}>
      
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled4");
      }}><Text style={styles.loginButtonText}>Log In</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI5");
      }}><Text style={styles.forgotPasswordText}>Forgot Password?</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  loginButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  forgotPasswordText: {
    color: '#007AFF',
    textDecorationLine: 'underline'
  }
});
export default LoginScreen;