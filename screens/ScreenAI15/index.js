import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LogoutScreen = () => {
  const handleLogout = () => {// Handle logout logic here
  };

  const handleCancel = () => {// Handle cancel logic here
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to Log Out?</Text>
      <TouchableOpacity style={styles.yesButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
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
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10
  },
  yesButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  cancelButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});
export default LogoutScreen;