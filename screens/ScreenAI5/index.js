import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleResetPassword = () => {// Reset password logic
  };

  const handleCancel = () => {// Cancel logic
  };

  return <View style={styles.container}>
      
      <Text style={styles.title}>Reset Password</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="New Password" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default ResetPasswordScreen;